// Format Date
export const formatDate = date => {
    var yyyy = date.getFullYear()
    var mm = date.getMonth() + 1 // getMonth() is zero-based
    var dd = date.getDate()
    return String(10000 * yyyy + 100 * mm + dd) // Leading zeros for mm and dd
}

// Greeting based on time

export const Greeting = () => {
    var myDate = new Date()
    var hours = myDate.getHours()
    var greet

    if (hours < 12) greet = 'morning'
    else if (hours >= 12 && hours <= 17) greet = 'afternoon'
    else if (hours >= 17 && hours <= 24) greet = 'evening'

    return <span>Good {greet}, </span>
}
