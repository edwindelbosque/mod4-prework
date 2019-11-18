import Nightmare from 'nightmare';
nightmare = Nightmare();

.goto('https://youtube.com/trending');
.wait(2000);

evaluate(() => {
	let items = document.querySelectorAll('#video-title').innerText;
  let results = items.map(string => ({'title': string}));
  console.log(results);
  return results;
});

.end();
