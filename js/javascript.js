/*on-peak fee= $0.132 / kWh
off-peak fee= $0.065 / kWh

on peak = 0.132 * x
off peak = 0.065 * y

Gross= Total Consumption Charges = on peak + off peak

Sales Tax = (Gross / 100) * 13

Provincial Rebate (British Colombia) = (Gross / 100) * 8

Total to pay = Gross + Tax - Rebate */



document.getElementById('btn').addEventListener('click', () => {

    const onPeak = document.getElementById('input1').value;
    const offPeak = document.getElementById('input2').value;
    const selectedProvince = document.getElementById('provinceSelect').value;

    const onPeakFee = 0.132;
    const offPeakFee = 0.065;

    const onPeakCharge = onPeakFee * onPeak;
    const offPeakCharge = offPeakFee * offPeak;
    const gross = onPeakCharge + offPeakCharge;

    const tax = 13;
    let provincialRebate = 0;

    if (selectedProvince === 'british columbia') {
        provincialRebate = (gross / 100) * 8;
    }

    const salesTax = (gross / 100) * tax;

    const totalToPay = gross + salesTax - provincialRebate;

    const bill = `
    <div class="charges">
        <div class="left">
            <h3>ON PEAK USAGE:</h3>
            <h1>$${onPeakCharge.toFixed(2)}</h1>
            <p>${onPeak} kwH @ $0.132/hr</p>
        </div>
        <div class="right">
            <h3>OFF PEAK USAGE:</h3>
            <h1>$${offPeakCharge.toFixed(2)}</h1>
            <p>${offPeak} kwH @ $0.065/hr</p>
        </div>
    </div>
    <p>Total Consumption Charges: $${gross.toFixed(2)}</p>
    <p>Sales Tax (13%): $${salesTax.toFixed(2)}</p>
    <p>Provincial Rebate: -$${provincialRebate.toFixed(2)}</p>
    <div class="payment">
        <h2>TOTAL TO PAY:</h2>
        <h1> $${totalToPay.toFixed(2)}</h1>
    </div>
    `;

    console.log(`On Peak Charges: ${onPeakCharge.toFixed(2)}`)
    console.log(`Off Peak Charges: ${offPeakCharge.toFixed(2)}`)
    console.log(`Total Consumption Charges: ${gross.toFixed(2)}`)
    console.log(`Sales Tax: ${salesTax.toFixed(2)}`)
    console.log(`Provincial Rebate: ${provincialRebate.toFixed(2)}`)
    console.log(`YOU MUST PAY: ${totalToPay.toFixed(2)}`)

    document.getElementById('bill').innerHTML = bill;
});