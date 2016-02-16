function padZero(uNum,digits) {
	uNum=uNum.toString();
	while (uNum.length < digits)
	{
		uNum = '0' + uNum;
	}

	return uNum;
}

function dectobin(decnum) {
	var pNum=parseInt(decnum);
	var sNum=pNum.toString(2);

	sNum=padZero(sNum,4);

	return sNum;
}

function parseDate(hours,mins,secs) {
	var col,t;

	for (var r=0; r<3; r++)
	{
		switch (r)
		{
			case 0: var sect="h"; var snum=hours;
			break;
			case 1: var sect="m"; var snum=mins;
			break;
			case 2 : var sect="s"; var snum=secs;
			break;
		}

		snum=snum.toString();
		if (snum > 9)
		{
			col=dectobin(snum.charAt(0)) + dectobin(snum.charAt(1));
		}
		else
		{
			col="0000" + dectobin(snum);
		}

		for (t=0; t < 8; t++)
		{
			if (t < 4)
			{
				nCol=2;
			}
			else
			{
				nCol=1;
			}

			switch (t)
			{
				case 0: 
				case 4: var f=8;
				break;
				case 1:
				case 5: var f=4;
				break;
				case 2: 
				case 6: var f=2;
				break;
				case 3:
				case 7: var f=1;
				break;
			}

			if (col.charAt(t) == 1)
			{
				$("#" + sect + nCol + "x" + f).removeClass().addClass("lighton");
			}
			else
			{
				$("#" + sect + nCol + "x" + f).removeClass().addClass("lightoff");
			}
		}
	}
}

function lightTimer() {
	var datetime=new Date();

	parseDate(datetime.getHours(),datetime.getMinutes(),datetime.getSeconds());

	$("#timebox").text(padZero(datetime.getHours(),2) + ":" + padZero(datetime.getMinutes(),2) + ":" + padZero(datetime.getSeconds(),2));
	setTimeout(function() {
		lightTimer();
	},1000);
}

$(function () {
	lightTimer();
});