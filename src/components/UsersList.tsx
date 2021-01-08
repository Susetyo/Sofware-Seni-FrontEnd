import React, { useEffect, useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import { connect } from "react-redux";

const UsersList = (props: any) => {
    const classes = useStyles();

    const { listFilter } = props.users;

    return (
        <>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader
                        className={classes.listItemOverride}
                        component="div"
                        id="nested-list-subheader"
                    >
                        Repo List
                    </ListSubheader>
                }
                className={classes.root}
            >
                {listFilter.length > 0 &&
                    listFilter.map((listQuestionFilter: any) => {
                        return (
                            <ListItem
                                className={classes.listItemOverride}
                                button
                                key={listQuestionFilter.id}
                            >
                                <ListItemIcon>
                                    <QuestionAnswerIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary={listQuestionFilter.name}
                                />
                            </ListItem>
                        );
                    })}

                {listFilter.length == 0 && <h1>Data Not Found...</h1>}
            </List>
        </>
    );
};

const mapStateToProps = (state: any) => {
    return { users: state.users };
};

export default connect(mapStateToProps, null)(UsersList);

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
            paddingLeft: 0,
            paddingRight: 0,
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
        listItemOverride: {
            paddingLeft: 0,
            paddingRight: 0,
        },
    })
);
