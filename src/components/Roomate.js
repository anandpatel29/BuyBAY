import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from '@material-ui/core/Button';
import React, { Component } from 'react'


import { Dialog ,DialogTitle, DialogContent, DialogContentText,DialogActions, Typography } from '@material-ui/core';

function disablePrevDates(startDate) {
    const startSeconds = Date.parse(startDate);
    return (date) => {
      return Date.parse(date) < startSeconds;
    }
  }
  
  class Roomate extends Component{
    constructor(props) {
      super(props);
      this.state = {
        userlogin: false,
        message: "",
        open: false
      };
    }
   
      state = {
          startDate: new Date()
        };
       
        handleChange = date => {
          this.setState({
            startDate: date
          });
        };
       
       
        handleClose = () => {
          this.setState({
            open: false
          });
        };
        roomatefind = () => {
          this.setState({
            open: true,
            message: "We are currently working on displaying the housing for you. The website is still under development",
          });
          }
        
  
        
          
      render(){
          return(
              <div className ="Roomate">

                      <div class="roomhead" style={{transform: "translate(4rem, -19rem)"}}>
                        <h2 className="roomate-head">  Find your roomate </h2>
                        <div class="transbox" >
                          <p style={{fontSize: "25px"}}>"A good roomate may be the single most important thing to have when one is away at school"</p>
                        </div>
                      </div>
                <form action="javascript:void(0);">   
                
                <div className ="questions">
                 <div className= "question1"> 
                      <FormControl component="fieldset">
                       <FormLabel component="legend">1. Please Identify your gender</FormLabel>
                          <RadioGroup aria-label="gender" name="gender1" >
                          <FormControlLabel value="female" control={<Radio required={true}/>} label="Female" />
                                <FormControlLabel value="male" control={<Radio required={true}/>} label="Male" />
                                   <FormControlLabel value="other" control={<Radio required={true}/>} label="Other" />
                           </RadioGroup>
                      </FormControl>            
                 </div>
                 <div className= "question2">
                      <FormControl component="fieldset" className="Checkbox" >
                          <FormLabel component="legend">2. Please select your preferred age</FormLabel>
                   <FormGroup >
            <FormControlLabel
                           control={<Checkbox name="20" />}
                       label="Late 20's"
                           />
                   <FormControlLabel
                       control={<Checkbox name="30" />}
                          label="30's"
                        />
                  <FormControlLabel
                       control={<Checkbox name="40" />}
                          label="40's"
                        />
                  <FormControlLabel
                       control={<Checkbox name="50" />}
                          label=">40's"
                        />
              </FormGroup>
              </FormControl>
                 </div>
                 <div className= "question3">
                 <FormControl component="fieldset" className="Checkbox">
                          <FormLabel component="legend">3. Please select your price range</FormLabel>
                   <FormGroup>
                      <FormControlLabel
                           control={<Checkbox name="gilad" />}
                           label="0-500$"
                           />
            <FormControlLabel
                           control={<Checkbox name="jason" />}
                       label="501-1000$"
                           />
                   <FormControlLabel
                       control={<Checkbox name="preference" />}
                          label="1001-1500$"
                        />
                  <FormControlLabel
                       control={<Checkbox name="preference" />}
                          label="1501-2000$"
                        />
                  <FormControlLabel
                       control={<Checkbox name="preference" />}
                          label=">2000$"
                        />
              </FormGroup>
              </FormControl>
                 </div>
                 <div className= "question4">
                 <FormLabel component="legend">4. Please select your move-in date</FormLabel>
                      <DatePicker
                      placeholderText="MM/DD/YYYY"
                      required
                      minDate={new Date()}
                      selected={this.state.startDate}
                     onChange={this.handleChange}
        />
                 </div>
                 <div className= "question5">
                 <FormControl component="fieldset" className="Checkbox" >
                          <FormLabel component="legend">5. Please select your preferred housing rule</FormLabel>
                   <FormGroup>
                      <FormControlLabel
                           control={<Checkbox name="preference" />}
                           label="Smoking ok"
                           />
            <FormControlLabel
                           control={<Checkbox name="preference" />}
                       label="Drinking ok"
                           />
                   <FormControlLabel
                       control={<Checkbox name="preference" />}
                          label="Drugs allowed"
                        />
                  <FormControlLabel
                       control={<Checkbox name="preference" />}
                          label="cats ok"
                        />
                  <FormControlLabel
                       control={<Checkbox name="preference" />}
                          label="Dogs ok"
                        />
                   <FormControlLabel
                       control={<Checkbox name="preference" />}
                          label="Couples ok"
                        />
                         <FormControlLabel
                        control={<Checkbox name="preference" />}
                           label="Other pets allowed"
                         />
              </FormGroup>
              </FormControl>
                 </div>
                 <div className ="Rommate-button">
                   
                     <Button type="submit" variant="contained"
                          color="secondary"
                          onClick={() => {
                            this.roomatefind();
                      }}
                      >
                 Submit
                 </Button>
               
                 </div>
                 </div>
                 </form>
                
                 <Dialog
              open={this.state.open}
              onClose={this.handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">Find a Roomate</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  {this.state.message}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="secondary">
                  Close
                </Button>
              </DialogActions>
            </Dialog>    
                 </div>
          );
      }
  
  }
  
  
  
  export default Roomate;