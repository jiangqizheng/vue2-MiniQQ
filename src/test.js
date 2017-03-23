var A = function() {
        this.name = 'apple';
    }
    A.prototype.getName = function() {
            return this.name;
        }
        // 补充代码

    var B = A.extend({
        initialize: function() {
            this.superclass.initialize.call(this);
            this.total = 3;
        },
        say: function() {
            return '我有' + this.total + '个' + this.getName()
        }
    });
    var b = new B();
    console.log(b.say()); //我有3个apple