function() {
   this.label = 'delay';
   this._value = 1;
   this.useNumberMouseHandler();
   this.render = function() {
      mCurve([[-1,.7],[1,.7],[1,-.7],[-1,-.7]]);
      mLine([-1,.7],[-1,-.7]);
      this.afterSketch(function() {

         var srcInput = this.inValue[0];
         var srcDelay = this.inValue[1] !== undefined ? this.inValue[1] : this._value;

         var func = function() {
            var input = srcInput;
            var delay = srcDelay;

return function(t) {
   return valueOf(input, t - valueOf(delay, t));
};
         };

         this.setOutPortValue(func());
	 if (this.inValue[1] === undefined)
            mLabel(this._value, [0, 0], .3);
         else
	    mCurve(curveForSignal);
      });
   }
}
