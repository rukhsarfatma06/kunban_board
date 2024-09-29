export const initializeGrid = (tickets, groupBy, orderBy) => {
    let sortedTickets;
    if (orderBy === "priority") {
        sortedTickets = sortByPriority(tickets);
    } else {
        sortedTickets = sortByTitle(tickets);
    }

    return groupTickets(sortedTickets, groupBy);
};

export const mapUserById = (users) => {
    return users.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
    }, {});
};

const sortByPriority = (tickets) => tickets.sort((a, b) => b.priority - a.priority);
const sortByTitle = (tickets) => tickets.sort((a, b) => a.title.localeCompare(b.title));

const groupTickets = (tickets, groupBy) => {
    return tickets.reduce((acc, ticket) => {
        const key = ticket[groupBy];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(ticket);
        return acc;
    }, {});
};
