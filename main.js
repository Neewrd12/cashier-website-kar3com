function billInput(tipValue)
{
  const peopleValue = document.querySelector('.people').value;

  if (peopleValue <= 0)
  {
    document.querySelector('.error')
      .innerHTML = 'Input buyers';
  }
  else 
  {
    let costum = document.querySelector('.tip_custom');
    costum.value = '';

    const bills = document.querySelector('.bill').value;
    let totalss = parseFloat((Math.round((bills*100)*tipValue) / 100) / peopleValue).toFixed(2);

    document.querySelector('.total-tip').innerHTML = `$${totalss}`;

    document.querySelector('.total-bills')
      .innerHTML = `$${parseFloat(bills / peopleValue).toFixed(2)}`;
    
    document.querySelector('.tot2').innerHTML = `Tip Amount (${tipValue*100}%)`
  }

}

function inputCustom() 
{ 
  const peopleValue = document.querySelector('.people').value;

  if (peopleValue <= 0)
  {
    document.querySelector('.error')
      .innerHTML = 'Input buyers';
  }
  else
  {
    const bills = document.querySelector('.bill').value;
    const costum = document.querySelector('.tip_custom').value;
    let costumTotalss = parseFloat((Math.round((bills*100)*(costum/100)) / 100) / peopleValue).toFixed(2);

    document.querySelector('.total-tip').innerHTML = `$${costumTotalss}`;

    document.querySelector('.total-bills')
      .innerHTML = `$${parseFloat(bills / peopleValue).toFixed(2)}`;
  }
}

function reset() 
{
  let costum = document.querySelector('.tip_custom');
  costum.value = '';

  const peopleValue = document.querySelector('.people');
  peopleValue.value = '';

  const bills = document.querySelector('.bill');
  bills.value = '';

  document.querySelector('.total-tip').innerHTML = `$0.00`;

  document.querySelector('.total-bills')
  .innerHTML = `$0.00`;  

  document.querySelector('.error')
      .innerHTML = '';
}