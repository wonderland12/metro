
$('.m-map .station').each(function(){
	// ������������ ��������� �� ������ �������
	$(this).css('left', stations[$(this).attr('index')].x).css('top', stations[$(this).attr('index')].y);
}); 

$('.station').click(function(){
	// 3 ��������:
	// ���� �� ������
	// ������� ����� ����
	// ������� ������ ����
	
	if($('.station[end]').length > 0) {
		// nothing to do
	} else if($('.station[start]').length > 0) {
		// end
		travelEnd(this);
	} else {
		// start
		travelStart(this);
	}
	
});