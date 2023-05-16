import React from 'react';
import axios from 'axios';
import './Booking.css';
import Select from 'react-select';


class Booking extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        city: '',
        country: '',
        province: '',
        date: '',
        time: '06:00',
        description: '',
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleTimeChange = selectedOption => {
        this.setState({ time: selectedOption.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        // Convert 24-hour time format to 12-hour format with AM/PM
        let [hours, minutes] = this.state.time.split(":");
        let AMorPM = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;

        const booking = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phone: this.state.phone,
            city: this.state.city,
            country: this.state.country,
            province: this.state.province,
            date: this.state.date,
            time: `${hours}:${minutes} ${AMorPM}`,
            description: this.state.description,
        };

        axios.post(`http://localhost:3000/book`, booking)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        const times = [
            "6:00 AM", "6:30 AM", "7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM",
            "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
            "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
            "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
            "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM"
        ];
        const timeOptions = times.map(time => ({
            value: time,
            label: time
        }));


        return (
            <div>
                <div className="booking-header">
                    <h1 className="text-center">Booking</h1>
                </div>
                <div className="booking-container">
                    <h2 className="text-center my-4">Request an Appointment Today!</h2>
                    <div className="shadow p-3 mb-5 bg-body rounded" style={{ width: "80%" }}>
                        <form onSubmit={this.handleSubmit} className="p-4">
                            {/* Your form fields here with rearranged order */}
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <label>First Name</label>
                                    <input type="text" name="firstName" onChange={this.handleChange} className="form-control" />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Last Name</label>
                                    <input type="text" name="lastName" onChange={this.handleChange} className="form-control" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <label>Email</label>
                                    <input type="email" name="email" onChange={this.handleChange} className="form-control" />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Phone</label>
                                    <input type="tel" name="phone" onChange={this.handleChange} className="form-control" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <label>Country</label>
                                    <input type="text" name="country" onChange={this.handleChange} className="form-control" />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Province</label>
                                    <input type="text" name="province" onChange={this.handleChange} className="form-control" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <label>City</label>
                                    <input type="text" name="city" onChange={this.handleChange} className="form-control" />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Requested Date</label>
                                    <input type="date" name="date" onChange={this.handleChange} className="form-control" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Requested Time</label>
                                <Select
                                    options={timeOptions}
                                    onChange={this.handleTimeChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Details</label>
                                <textarea name="description" onChange={this.handleChange} className="form-control"></textarea>
                            </div>
                            <button type="submit" className="btn btn-custom mt-3">Submit Request</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Booking;