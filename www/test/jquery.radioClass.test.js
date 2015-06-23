(function(global, Q, $){
	'use strict';

	var class_name = 'clicked';

	// Qunit 모듈 정의
	Q.module('jquery.radioClass', {
		beforeEach: function() {
			var self = this;
			self.name = class_name;
			self.$demo = $('#demo');
			self.$demo.on('click', 'li > a', function(e) {
				e.preventDefault();
				$(this).radioClass( self.name, 'li' );
			});
		}
	});

	Q.test('jQuery v1.x 버전을 사용하는가?', 2, function(A) {
		// A.expect(2);
		A.strictEqual($, window.jQuery, 'jQuery 사용 준비 완료!');
		A.ok($.fn.jquery[0] === '1', 'jQuery 1.x 버전대 사용!');
	});

	Q.test('$.fn은 jQuery.prototype인가?', function(A){
		A.strictEqual($.fn, jQuery.prototype, '$.fn은 jQuery.prototype이 맞습니다.');
	});

	Q.test('$.fn.radioClass가 존재하는가?', function(A){
		A.ok($.fn.radioClass, '존재합니다.');
	});

	Q.test('#demo li:first-child > a 요소의 부모 요소에 "'+ class_name +'" class 속성이 추가되었는가?', function(A) {
		var _demo = this.$demo,
			_demo__a = _demo.find('li:first-child > a').trigger('click');
		A.ok(_demo__a.parent().hasClass(this.name));
	});

})(window, window.QUnit, window.jQuery);