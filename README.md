# beets-config

Config for https://github.com/sampsyo/beets

## Currently used commands

- `beet import somefolderorarchiv`
- `beet ls -a 'added:yyyy-mm-dd'`

## Install

1. [Install beets](http://beets.readthedocs.org/page/guides/main.html#installing) (we also need `pip`)
1. [Install Node.js (which includes npm)](https://nodejs.org)
1. [Install ImageMagick](http://imagemagick.org)
1. Create a folder somewhere, e.g. `…/beets`
1. Clone or [download](https://github.com/Schweinepriester/beets-config/releases) beets-config and put it in a folder (e.g. `beets-config`) in the newly created folder `…/beets`
1. Open your favorite shell (bash, powershell, …) and navigate to `…/beets/beets-config`)
1. Install dependencies for several beets plugins: `pip install -r beets-config_requirements.txt`
1. Run `npm install`
1. [Install gulp globally: `npm install --global gulp`](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md#1-install-gulp-globally)
1. Create `…/beets/customconfig.yaml` and configure all properties you want to replace, probably at least `directory` and `library`, e.g.

    ```
    directory: F:\Audio\Mediathek\Musik
    library: E:\beets\musiclibrary.db
    ```

1. Run `gulp` (in `…/beets/beets-config`)
1. [Set `BEETSDIR` to the created folder `…/beets/beetsdir`](https://beets.readthedocs.org/en/stable/reference/config.html#configuration-location)
  - Windows: Set as user variable
1. Check loaded config: Type `beet config -p` to see the path on your system
1. If it prints the path to `…/beets/beetsdir/config.yaml` you are all set! :)
1. Optional
    1. Install `unrar` for extracting RAR-archives
        - <http://www.rarlab.com/rar_add.htm>
        - <https://rarfile.readthedocs.org/en/latest/faq.html#how-can-i-get-it-work-on-windows>
