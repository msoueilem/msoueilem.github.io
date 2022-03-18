'use strict'

import {Patient} from "./model/patient.js";

$(function(){   
    const frmPatient =  {
        $id: null,
        $firstName: null,
        $middleInitial: null,
        $lastName: null,
        $dob: null,
        $department: null,
        $isOutpatient: null,
        $tbodyPatientsList : null,
        $chkElderlyPatients: null,
        $chkShowOutPatients: null,
        flagElder: false,
        flagOutP: false,
        pData : [],
        init: () =>{
            this.$id = $('#patientIdNumber');
            this.$firstName = $('#firstName');
            this.$middleInitial = $('#middleInitials');
            this.$lastName = $('#lastName');
            this.$dob = $('#dateOfBirth');
            this.$department = $('#ddlDepartment');
            this.$tbodyPatientsList = $('#tbodyPatientsList');
            this.$chkElderlyPatients = $('#chkElderlyPatients');
            this.$chkShowOutPatients = $('#chkShowOutPatients');

            frmPatient.chkChange(this.$chkElderlyPatients, 'e');
            frmPatient.chkChange(this.$chkShowOutPatients, 'o');
            
            $(":radio").on('click', function(){
                frmPatient.$isOutpatient = $(this);
            });
        },
        chkChange: ($elm, type) =>{
            const f = frmPatient;
            $elm.on('change', function(){
                if(this.checked){
                    type == 'e' ? (f.flagElder = true) : (f.flagOutP = true);                    
                    f.showByChecked();
                }else{
                    type == 'e' ? (f.flagElder = false) : (f.flagOutP = false); 
                    f.showByChecked();
                }
            })
        },
        submit: () =>{
            const f = frmPatient;
            //clear all filter & show all list again  
            $('input[type=checkbox]').prop('checked', false);
            f.flagElder = false; 
            f.flagOutP = false;
            this.$tbodyPatientsList.html('');
            f.pData.forEach(p => f.append(p));

            const newPatient = new Patient(this.$id.val(),this.$firstName.val(),this.$middleInitial.val(),this.$lastName.val(), new Date(this.$dob.val()), this.$department.val(), frmPatient.$isOutpatient.val());

            frmPatient.pData.push(newPatient);
            frmPatient.append(newPatient);

        },
        append:(p) =>{
            const $tr = $('<tr></tr>');
            const $td = $('<td></td>');
            const $tdId = $td.clone().html(p.getId());
            const $tdFn = $td.clone().html(p.getFirstName());
            const $tdMi = $td.clone().html(p.getMiddleInitial());
            const $tdLn = $td.clone().html(p.getLastName());
            const $tdDob = $td.clone().html(p.getDOB().toISOString().slice(0, 10));
            const $tdDpm = $td.clone().html(p.getDepartment());
            const $tdIsOutpatient = $td.clone().html(p.getIsOutpatient());
            $tr.append([$tdId, $tdFn, $tdMi, $tdLn, $tdDob, $tdDpm, $tdIsOutpatient]);
            this.$tbodyPatientsList.append($tr);
        },
        showByChecked: () => {
           
            const f = frmPatient;
            //console.log(`e: ${f.flagElder} && f:${f.flagOutP}`);
            let ftList = [];
            if(f.flagElder && f.flagOutP ){//both elderly & outpatient 
                ftList = f.pData.filter(p => f.getAge(p.getDOB()) >= 65 && p.getIsOutpatient() == 'Yes');
                this.$tbodyPatientsList.html('');
                ftList.forEach(p => f.append(p));
            }
            else if(!f.flagElder && f.flagOutP ){//show outpatient only                
                ftList = f.pData.filter(p => p.getIsOutpatient() == 'Yes');
                this.$tbodyPatientsList.html('');
                ftList.forEach(p => f.append(p));
            }
            else if(f.flagElder && !f.flagOutP ){//show elderly only
                ftList = f.pData.filter(p => f.getAge(p.getDOB()) >= 65 );
                this.$tbodyPatientsList.html('');
                ftList.forEach(p => f.append(p));
            }
            else{//both uncheck - show all        
                this.$tbodyPatientsList.html('');
                f.pData.forEach(p => f.append(p));
            }         

        },
        getAge: birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)
    }

    frmPatient.init();
    
    $('.container form').on('submit',function(event){
        event.preventDefault();
        frmPatient.submit();
    });
});