class CompleteDate {
    static allDate() {
        const nameMonths = ["Jan", "Feb", "Mar", "Aph", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let funcDate = new Date(),
            day = funcDate.getDate(),
            month = funcDate.getMonth(),
            year = funcDate.getFullYear(),
            hours = funcDate.getHours(),
            minutes = funcDate.getMinutes();

        if( hours === 0) { hours = 12 }
        if(minutes < 10) { minutes = '0' + minutes }
        
        let dateArr = [day, nameMonths[month], year]
        let hourArr = [hours, minutes]
        const joinDate = dateArr.join('/');
        const joinHour = hourArr.join(':');
        const completeDate = joinDate+ ' ' + "at" + ' ' + joinHour;

        return completeDate;
    }
}

export default CompleteDate;