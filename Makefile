# Various dialect translators.

LEX	 = flex

BUILD	 = jethro kraut cockney jive nyc ken ky00te newspeak
OTHER	 = eleet b1ff chef jibberish upside-down rasterman studly fudd

all:	$(OTHER) $(BUILD)

install:	$(BUILD) $(OTHER)
	install -d $(PREFIX)/usr/games
	install $(BUILD) $(OTHER) $(PREFIX)/usr/games/
	install -d $(PREFIX)/usr/share/man/man6
	install -m 0644 filters.6 $(PREFIX)/usr/share/man/man6
	cd $(PREFIX)/usr/share/man/man6 && \
		$(foreach prog,$(BUILD) $(OTHER),ln -s filters.6 $(prog).6;)

samples:	$(BUILD) $(OTHER)
	-rm -f SAMPLES
	PATH=.:$$PATH; export PATH; echo $(BUILD) $(OTHER) |xargs -n 1 sh makesample.sh

clean:
	$(RM) -f core *.o *~ $(BUILD) *.c SAMPLES
	cd ky00te.dir && make clean

.SUFFIXES: .l

.l:
	$(RM) $*.c
	$(LEX) -t $< > $*.c
	$(CC) -O -o $@ $*.c -lfl -g
#	strip $@
	$(RM) $*.c

.SUFFIXES: .dir

.dir:	
	cd $<; make

ky00te:
	cd ky00te.dir && make

kraut:
	cd kraut.dir && lex kraut.l
	cd kraut.dir && cc kraut.c lex.yy.c -o ../kraut
