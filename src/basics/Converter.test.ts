
class Converter {
    unit;
    size;
    bytes;

    constructor(number, b) {
        switch (b) {
            case 'B':
                this.bytes = number;
                break;
            case 'KB':
                this.bytes = number * 1024;
                break;
            case 'MB':
                this.bytes = number * 1024 * 1024;
                break;
            case 'GB':
                this.bytes = number * 1024 * 1024 * 1024;
                break;
            case 'TB':
                this.bytes = number * 1024 * 1024 * 1024 * 1024;
                break;
        }
    }
    toB() {
        this.unit = 'B';
        this.size = this.bytes + " B"
    }

    toKB() {
        this.unit = 'KB';
        this.size = this.bytes / Math.pow(1024, 1) + " KB"
    }

    toMB() {
        this.unit = 'MB';
        this.size = this.bytes / Math.pow(1024, 2) + " MB"
    }

    toGB() {
        this.unit = 'GB';
        // this.size =Math.ceil( (this.bytes *1000 / Math.pow(1024, 3))/1000) + " GB"
        this.size = Math.ceil( 1000* this.bytes * 2 ** - (10*3))/1000 + " GB"
    }

    toTB() {
        this.unit = 'TB';
        this.size = Math.ceil( 1000*this.bytes * 2 ** - (10*4))/1000 + " TB"
    }
}
const {assert} = require('chai');

describe('Basic Tests', function () {
    describe('B to:', function () {
        const file = new Converter(1099511627776, 'B');

        it('KB', function () {
            file.toKB();

            assert.strictEqual(file.unit, 'KB', 'Wrong unit');
            assert.strictEqual(file.size, '1073741824 KB', 'Wrong size');
        });

        it('MB', function () {
            file.toMB();

            assert.strictEqual(file.unit, 'MB', 'Wrong unit');
            assert.strictEqual(file.size, '1048576 MB', 'Wrong size');
        });

        it('GB', function () {
            file.toGB();

            assert.strictEqual(file.unit, 'GB', 'Wrong unit');
            assert.strictEqual(file.size, '1024 GB', 'Wrong size');
        });

        it('TB', function () {
            file.toTB();

            assert.strictEqual(file.unit, 'TB', 'Wrong unit');
            assert.strictEqual(file.size, '1 TB', 'Wrong size');
        });
    });
});
