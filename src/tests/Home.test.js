import React from 'react';
import { shallow } from 'enzyme';
import App from '../Componets/Home';
import ReactDOM from 'react-dom';
describe('Home page testing', ()=> {
    const wrapper = shallow(<App/>);
    it('Should have description', ()=> {
        expect(wrapper.find('#descp')).toHaveLength(1);
    });
    it('Should have Exam schedule table', ()=> {
        expect(wrapper.find('#ExamSchedules')).toHaveLength(1);
    });
    it('Should have Feedback displayed', ()=> {
        expect(wrapper.find('#Reviews')).toHaveLength(1);
    });
    it('Should have Contact Us displayed', ()=> {
        expect(wrapper.find('#Contact')).toHaveLength(1);
    });
    it('should have Linkedin btn component', ()=> {
        expect(wrapper.find('Button')).toHaveLength(1);
        expect(wrapper.find('Button').text()).toEqual('Linkedin');
    });
    it('should have a navigation bar', ()=> {
        expect(wrapper.find('Navbar')).toHaveLength(1);
    });
    it('should have links for faculty and admin login', ()=> {
        expect(wrapper.find('#alogin')).toBeDefined();
        expect(wrapper.find('#flogin')).toBeDefined();
    });
    it("Unit testing", () =>{
        const span = document.createElement("span");
        ReactDOM.render(<App></App>,span)
        });
});