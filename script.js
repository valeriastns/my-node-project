const calculateBonus = (a, b) => {
    let bonus;
    const sum = a + b;
    debugger; //здесь проверяется текущее значения sum 
    sum > 50 ? (bonus = 50) : (bonus = sum);
    debugger; // здесь проверяется значение bonus перед return
    return bonus;
    };

    //calculateBonus(45, 25);

    module.exports = calculateBonus;