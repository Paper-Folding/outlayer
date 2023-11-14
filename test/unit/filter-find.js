import Outlayer from "../../src/lib/outlayer";
import QUnit from "../qunitjs";

QUnit.test("filter find item elements", function (assert) {
    (function () {
        var olayer = new Outlayer("#children");
        assert.equal(olayer.items.length, 3, "no itemSeletor, gets all children");
    })();

    (function () {
        var olayer = new Outlayer("#filtered", {
            itemSelector: ".item"
        });
        assert.equal(olayer.items.length, 6, "filtered, itemSelector = .item, not all children");
    })();

    (function () {
        var olayer = new Outlayer("#found", {
            itemSelector: ".item"
        });
        assert.equal(olayer.items.length, 4, "found itemSelector = .item, querySelectoring");
    })();

    (function () {
        var olayer = new Outlayer("#filter-found", {
            itemSelector: ".item"
        });
        assert.equal(olayer.items.length, 5, "filter found");
    })();
});
