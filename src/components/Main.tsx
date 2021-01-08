import React from "react";
import "../styles/Main.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Search from "./Search";
import UsersList from "./UsersList";

const Main = () => {
    return (
        <div className="main">
            <Container className="main__container">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <h1 className="main__title">
                            List Git Repository Based By Your Name.
                        </h1>
                    </Grid>
                    <Grid item xs={12}>
                        <Search />
                    </Grid>
                    <Grid item xs={12}>
                        <UsersList />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Main;
