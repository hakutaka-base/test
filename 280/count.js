/*　###########################################
 初期コード
 初日を「1日」としてカウント		v1.1_a2
 ##############################################  */


// 今日の日付を取得し、時刻を00:00:00に設定
var today = new Date();
today.setHours(0, 0, 0, 0);

// 経過日数を計算してHTMLに出力する関数
function displayElapsedDays(elementId, year, month, day, text) {
  var eventDate = new Date(year, month - 1, day);
  eventDate.setHours(0, 0, 0, 0);

  // 合計日数にも +1
  var totalCount = Math.floor((today.getTime() - eventDate.getTime()) / (1000 * 60 * 60 * 24)+1);
  var output = '';

  // ここも +1
  if (totalCount >= 1) {
    // 経過年数を計算
    var years = today.getFullYear() - eventDate.getFullYear();
    if (today.getMonth() < eventDate.getMonth() || (today.getMonth() == eventDate.getMonth() && today.getDate() < eventDate.getDate())) {
      years--; // 誕生日がまだ来ていない場合は年を減らす
    }

    // 年を除いた残りの日数を計算
    var lastAnniversary = new Date(today.getFullYear(), eventDate.getMonth(), eventDate.getDate());
    if (lastAnniversary > today) {
      lastAnniversary.setFullYear(today.getFullYear() - 1);
    }
    var remainingDays = Math.floor((today.getTime() - lastAnniversary.getTime()) / (1000 * 60 * 60 * 24));

    output = `${text}${years}年と${remainingDays}日（合計${totalCount}日）`;

  } else {
    output = text + '調整中';
  }

  document.getElementById(elementId).innerHTML = output;
}

// 関数を複数回呼び出してそれぞれのイベントを表示
displayElapsedDays('event1', 2023, 4, 22, '2023年4月22日の「初投稿」から');
displayElapsedDays('event2', 2023, 5, 12, '生配信から');
displayElapsedDays('event3', 2023, 4, 22, '2023年8月10日から');
