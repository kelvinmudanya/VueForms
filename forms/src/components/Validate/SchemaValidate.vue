<template>
    <Form @submit="onSubmit" :validation-schema="formSchema">
        <div class="form-group">
            <label for="name">Name</label>
            <Field
            name="name"
            placeholder="Enter your name..."
            class="form-control"
            />
            <ErrorMessage name="name" as="div" v-slot="{ message }">
            <div class="alert alert-danger" role="alert">
                {{ message }}

            </div>
            </ErrorMessage>

        </div >

        <div class="form-group">
            <label for="email">Email</label>
            <Field name="email"
           
            class="form-control"
            v-slot="{field, errors, errorMessage}">
            <input type="text"
            id="email"
            placeholder="Enter your email address..."
            class="form-control"
            v-bind="field"
            :class="{'is-invalid': errors.length !== 0}"/>
           

            <div class="alert alert-danger" role="alert"
                v-if="errors.length !== 0">
                {{ errorMessage }}

            </div>
            </Field>

        </div>

        <div class="form-group">
            <label for="message">Message</label>
            
            <Field name="message"
            
            class="form-control"
            v-slot="{field, errors, errorMessage}">
            <textarea type="text"
            placeholder="Enter your message..."
            id="message"
            class="form-control"
            v-bind="field"
            rows="3"
            :class="{'is-invalid': errors.length !== 0}"/>
           

            <div class="alert alert-danger" role="alert"
                v-if="errors.length !== 0">
                {{ errorMessage }}

            </div>
            </Field>

        </div>
        

        <hr/>

        <button 
            class="btn btn-primary"
            >
                Submit

            </button>
    </Form>

</template>

<script>

import {Field, Form, ErrorMessage} from 'vee-validate'

export default{
components:{
    Field, 
    Form,
    ErrorMessage
},
data(){
    return {
        formSchema:{
            name(value){
            if(value && value.trim){
            return true
           
        }
        return 'Name is required'
        },

        email(value){
            if(!value){
            return 'email is required';
        }
        if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
        {
                return 'The email is not valid'
        }
        return true;

        },

        message(value){
            if(!value){
            return 'You must write something'
        }
        return true

        }


        }
       
    }

},
methods:{

    onSubmit(values, { resetForm }){
        console.log(values)
        resetForm();
    },
   

    }
}

</script>