const CATEGORIES = [
  { name: 'technology', color: '#3b82f6' },
  { name: 'science', color: '#16a34a' },
  { name: 'finance', color: '#ef4444' },
  { name: 'society', color: '#eab308' },
  { name: 'entertainment', color: '#db2777' },
  { name: 'health', color: '#14b8a6' },
  { name: 'history', color: '#f97316' },
  { name: 'news', color: '#8b5cf6' },
];

const btn = document.querySelector('.btn-open');
const form = document.querySelector('.fact-form');
const factsList = document.querySelector('.facts-list');

factsList.innerHTML = '';

//load data from database

loadFacts();

async function loadFacts() {
  const res = await fetch(
    'https://kxynufeuyebhjlmktnqo.supabase.co/rest/v1/facts',
    {
      headers: {
        apikey:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4eW51ZmV1eWViaGpsbWt0bnFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEwMDA1ODQsImV4cCI6MTk5NjU3NjU4NH0.34goeK2Nm5DiYTx3bSO91uCoxVO1-DQRC5xzYCCG_As',
        authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4eW51ZmV1eWViaGpsbWt0bnFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEwMDA1ODQsImV4cCI6MTk5NjU3NjU4NH0.34goeK2Nm5DiYTx3bSO91uCoxVO1-DQRC5xzYCCG_As',
      },
    }
  );
  const data = await res.json();
  createFactsList(data);
}

function createFactsList(dataArray) {
  const htmlArray = dataArray.map(
    (fact) => `<li class='fact'>
    <p>${fact.text}
    <a href="${fact.source}"
    target="_blank"
    >(Source)</a>
    </p><span class="tag" style="background-color: ${
      CATEGORIES.find((cat) => cat.name === fact.category).color
    }">${fact.category}</span></li>`
  );

  const html = htmlArray.join('');
  factsList.insertAdjacentHTML('afterbegin', html);
}

btn.addEventListener('click', function () {
  if (form.classList.contains('hidden')) {
    form.classList.remove('hidden');
    btn.textContent = 'Close';
  } else {
    form.classList.add('hidden');
    btn.textContent = 'Share a fact';
  }
});
