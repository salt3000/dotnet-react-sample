import React, { useState, useEffect, Fragment } from "react";

import axios from "axios";
import { Container, Header, List } from "semantic-ui-react";
import { Activity } from "../modules/activity";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

function App() {
    const [activities, setActivities] = useState<Activity[]>([]);
    const [selectedActivity, setSelectedActivity] = useState<
        Activity | undefined
    >(undefined);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        axios
            .get<Activity[]>("http://localhost:5000/api/activities")
            .then((response) => {
                setActivities(response.data);
            });
    }, []);

    function handleSelectActivity(id: string) {
        setSelectedActivity(activities.find((x) => x.id === id));
    }
    function handleCancelSelectActivity() {
        setSelectedActivity(undefined);
    }

    function handleOpenForm(id?: string) {
        id ? handleSelectActivity(id) : handleCancelSelectActivity();
        setEditMode(true);
    }
    function handleCloseForm() {
        setEditMode(false);
    }

    return (
        <Fragment>
            <NavBar openForm={handleOpenForm}/>
            <Container style={{ marginTop: "7em" }}>
                <ActivityDashboard
                    selectedActivity={selectedActivity}
                    selectActivity={handleSelectActivity}
                    cancelSelectActivity={handleCancelSelectActivity}
                    activities={activities}
                    editMode={editMode}
                    openForm={handleOpenForm}
                    closeForm={handleCloseForm}
                />
            </Container>
        </Fragment>
    );
}

export default App;
