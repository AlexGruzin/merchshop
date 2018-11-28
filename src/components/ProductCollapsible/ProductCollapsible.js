import classNames from 'classnames';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Card from "@material-ui/core/Card/Card";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import IconButton from "@material-ui/core/IconButton/IconButton";
import PropTypes from "prop-types";
import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { BODY1 } from "../../constants/typography";
import styles from './styles'


@injectSheet( styles )
export default class ProductCollapsible extends Component {

  static propTypes = {
    classes: PropTypes.object,
    body: PropTypes.string.isRequired,
    content: PropTypes.any,
    className: PropTypes.string,
    title: PropTypes.node.isRequired,
    headerClass: PropTypes.string
  };

  static defaultProps = {
    className: '',
    content: '',
    headerClass: ''
  };

  state = { expanded: false };

  handleExpandClick = () => {
    this.setState( state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes, body, title, headerClass } = this.props;

    const { expanded } = this.state;

    return (
      <Card className={classes.root} classes={{
        root: classes.cardRoot,
      }}>
        <CardHeader
          classes={{
            root: classNames( classes.cardHeaderRoot, headerClass ),
            action: classes.headerAction,
          }}
          action={
            <IconButton
              className={classNames( classes.expand )}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more">
              {expanded ? <RemoveIcon /> : <AddIcon />}
            </IconButton>
          }
          title={title}/>
        <Collapse in={this.state.expanded} timeout="auto" classes={{
          container: classes.collapseContainer
        }} unmountOnExit>
          <CardContent>
            <Typography variant={BODY1}>
              {body}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}
