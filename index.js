/***
 *  <!-- Refer below bootstrap template and generate the HTML with only using DOM manipulation concepts -->
  <form id="form" class="m-3" method="get">
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Email address</label>
      <input type="email" name="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
        required>
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
      <textarea class="form-control" name="desc" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <input type="submit" />
  </form>
 * 
 */

const divElement = document.getElementById('root');
divElement.style.margin = '10px';
divElement.style.border = '1px solid black';
divElement.style.height = '1000px';

const submitBtn = document.createElement('input');
submitBtn.setAttribute('type', 'submit');
submitBtn.innerText = 'Submit';


const formElement = document.createElement('form');
formElement.setAttribute('id', 'form');
formElement.setAttribute('class', 'm-3');
formElement.setAttribute('method', 'get');


const inputEmailElement = document.createElement('input');
inputEmailElement.setAttribute('type', 'email');
inputEmailElement.setAttribute('class', 'form-control');
inputEmailElement.setAttribute('name', 'desc');
inputEmailElement.setAttribute('id', 'exampleFormControlInput1');
inputEmailElement.setAttribute('placeholder', 'name@example.com');
inputEmailElement.setAttribute('required', true);

const labelElement1 = document.createElement('label');
labelElement1.setAttribute('for', 'exampleFormControlInput1');
labelElement1.setAttribute('class', 'form-label');
labelElement1.innerText = 'Email address';

const divElement1 = document.createElement('div');
divElement1.setAttribute('class', 'mb-3');

divElement1.append(labelElement1, inputEmailElement);



const textAreaElement = document.createElement('textarea');
textAreaElement.setAttribute('class', 'form-control');
textAreaElement.setAttribute('name', 'desc');
textAreaElement.setAttribute('id', 'exampleFormControlTextarea1');
textAreaElement.setAttribute('rows', '3');

const labelElement2 = document.createElement('label');
labelElement2.setAttribute('for', 'exampleFormControlTextarea1');
labelElement2.setAttribute('class', 'form-label');
labelElement2.innerText = 'Example textarea';

const divElement2 = document.createElement('div');
divElement2.setAttribute('class', 'mb-3');

divElement2.append(labelElement2, textAreaElement);


formElement.append(divElement1, divElement2, submitBtn);
//document.body.appendChild(formElement);
divElement.appendChild(formElement);

