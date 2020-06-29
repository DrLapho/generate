const the_form = document.querySelector('.quiz_form');
const the_results = document.querySelector('.result');
const the_answers = ['A','A', 'A','B'];
const final_result =document.querySelector('.final_result');
const bb = document.querySelector('.bb');



the_form.addEventListener('submit',e => {
  e.preventDefault();
  let my_score = 0;
  const my_answers = [the_form.q1.value,the_form.q2.value,the_form.q3.value,the_form.q4.value];

  my_answers.forEach((answer,index) => {
    if (answer===the_answers[index])
    {
      my_score+=25;
    }
  });

  the_results.classList.remove('d-none');
  the_results.querySelector('span').textContent = `${my_score}%`;
  scrollTo(0,0);

  let final_output = 0;
  const my_animator = setInterval(()=>{

    if (final_output===my_score){
      clearInterval(my_animator);
      final_result.classList.remove('d-none');
      final_result.querySelector('span').textContent = `${my_score}%`;
      the_results.classList.add('d-none');
    }
    else {
      final_output++;
      }
      the_results.querySelector('span').textContent = `${final_output}%`;

  },100);



bb.classList.add('d-none');
});
