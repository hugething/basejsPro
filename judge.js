define(function(require, exports, module) {
    module.id = "judge";

    //常用正则表达式
    var regs = {
        isMail: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,
        isPhoneNumber: /^(13[0-9]|15[0-9]|18[0-9])\d{8}$/,
        isInt: /^[-]{0,1}[0-9]{1,}$/,
        isLeter: /^[A-Za-z]+$/,
        isID: /^[a-zA-z_]\w{3,15}$/, //判断账户格式是否正确,以字母下划线开头
        isPassword: /^(\w){5,17}$/, //判断密码格式是否正确
        isIdCard: /^\d{15}|\d{}18$/, //判断身份证格式是否正确
        isCharacter: /^[\u4e00-\u9fa5]{0,}$/,
        isMonth: /^(0?[1-9]|1[0-2])$/,
        isDay: /^((0?[1-9])|((1|2)[0-9])|30|31)$/,
        isArray: {
            test: function(array) {
                return Object.prototype.toString.call(array) === '[object Array]';
            }
        },
        isNaN: {
            test: function(value) {
                return (isNaN(value));
            }
        },
        isNumber: {
            test: function(value) {
                return typeof(value) == "number";
            }
        },
        isPlainObject: {
            test: function(obj) {
                var hasOwnProperty = Object.prototype.hasOwnProperty,
                    toString = Object.prototype.toString;
                if (!obj || toString.call(obj) !== "[object Object]" || obj.nodeType || obj.setInterval) {
                    return false;
                }
                if (obj.constructor && !hasOwnProperty.call(obj, "constructor") && !hasOwnProperty.call(obj.constructor.prototype, "isPrototypeOf")) {
                    return false;
                }
                var key;
                for (key in obj) {}
                return key === undefined || hasOwnProperty.call(obj, key);
            }
        },
        isIE6: {
            test: function() {
                if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE6.0") {
                    return true;
                } else {
                    return false;
                }
            }
        },
        isIE7: {

            test: function() {
                if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE7.0") {
                    return true;
                } else {
                    return false;
                }
            }

        }

    };

    exports.decide = function(type, str) {
        return (regs[type].test(str));
    };

    // 遍历
    exports.each = function(obj) {
        var array = " ";
        var obj_x = " ";
        if (Object.prototype.toString.call(obj) === '[object Array]') {
            for (var i = 0; i < obj.length; i++) {
                array += obj[i] + " ";
            }
            return array;
        } else if (typeof(obj) == "object") {
            for (var x in obj) {
                if (typeof(obj[x]) == "function") {
                    obj[x]();
                } else {
                    obj_x += x + "=" + obj[x] + " ";
                }
            }
            return obj_x;
        } else {
            alert("这个函数只支持数组和对象");
        }

    };

 };
 exports.

});
