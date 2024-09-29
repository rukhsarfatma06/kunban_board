import React, { useCallback, useEffect, useState } from 'react';
import Header from './components/Header';
import Grid from './components/Grid';
import { TICKETS_API_URL } from './constants';
import { initializeGrid, mapUserById } from './utils';
import Loader from './components/Loader';
import './styles/App.css';

function App() {
    const [ticketList, setTicketList] = useState([]);
    const [userDetails, setUserDetails] = useState({});
    const [gridContent, setGridContent] = useState({});
    const [groupMethod, setGroupMethod] = useState("status");
    const [orderMethod, setOrderMethod] = useState("priority");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadLocalSettings();
        fetch(TICKETS_API_URL)
            .then(response => response.json())
            .then(data => {
                const { tickets, users } = data;
                setTicketList(tickets);
                setUserDetails(mapUserById(users));
            })
            .catch(error => { console.error(error); }); // Error handling
    }, []);

    useEffect(() => {
        if (!ticketList.length) return;
        setGridContent(initializeGrid(ticketList, groupMethod, orderMethod, userDetails));
        setIsLoading(false);
    }, [groupMethod, orderMethod, ticketList, userDetails]);

    const changeGrouping = useCallback((value) => {
        setIsLoading(true);
        setGroupMethod(value);
        saveLocalSettings({ grouping: value });
    }, []);

    const changeOrdering = useCallback((value) => {
        setIsLoading(true);
        setOrderMethod(value);
        saveLocalSettings({ ordering: value });
    }, []);

    const saveLocalSettings = useCallback((settings) => {
        for (let key in settings) {
            localStorage.setItem(key, settings[key]);
        }
    }, []);

    const loadLocalSettings = useCallback(() => {
        setGroupMethod(localStorage.getItem("grouping") || "status");
        setOrderMethod(localStorage.getItem("ordering") || "priority");
    }, []);

    return (
        <div className="App">
            <Header
                grouping={groupMethod}
                setGrouping={changeGrouping}
                ordering={orderMethod}
                setOrdering={changeOrdering}
                userDetails={userDetails}
            />
            {isLoading ? <Loader /> :
                <Grid gridData={gridContent} grouping={groupMethod} userIdToData={userDetails} />
            }
        </div>
    );
}

export default App;
