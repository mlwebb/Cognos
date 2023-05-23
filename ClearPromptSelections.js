define(function () {
	"use strict";

	function BasicControl() {
	};

	BasicControl.prototype.draw = function (oControlHost) {
		var aControls = oControlHost.page.getAllPromptControls();

		for (var i = 0; i < aControls.length; i++) {
			var oControl = aControls[i];
			var aValues = oControl.getValues();

			var oTextControl = oControlHost.page.getControlByName("txtControlText" + i.toString());
			var oTextParameter = oControlHost.page.getControlByName("txtParameterText" + i.toString());
			var oTextUse = oControlHost.page.getControlByName("txtUseText" + i.toString());
			var oTextDisplay = oControlHost.page.getControlByName("txtDisplayText" + i.toString());
			
			oTextControl.text = oControl.name;
			oTextParameter.text = oControl.parameter;

			for (var j = 0; j < aValues.length; j++) {
				var oValue = aValues[j];
				oTextUse.text += oValue.use + " ";
				oTextDisplay.text += oValue.display + " ";

			}
		}
	};

	return BasicControl;
	
});

