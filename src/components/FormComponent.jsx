import React, { useRef, useState } from 'react'
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
const FormComponent = (props) => {
    const fileref = useRef()
    const getBase64 = (file) => new Promise(function (resolve, reject) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result)
        reader.onerror = (error) => reject('Error: ', error);
    })

    const changedata = async (e) => {
        if (e.target.name == "image") {
            props.data.obj[e.target.name] = await getBase64(e.target.files[0])
        }
        else {
            props.data.obj[e.target.name] = e.target.value
        }
        props.data.setobj({ ...props.data.obj })
        console.log(props.data.obj)
    }

    const save = (e) => {
        e.preventDefault()
        if (props.data.obj.age > 16 && props.data.obj.age < 100) {
            if (props.data.editid == 0) {
                props.data.count = props.data.count + 1
                props.data.obj.id = props.data.count
                console.log(props.data.obj)
                props.data.array.push(props.data.obj)
            }
            else {
                props.data.editid = 0;
                props.data.array.splice(props.data.array.findIndex(x => x.id == props.data.editid), 1, props.data.obj)
            }
            props.data.setobj({ ...props.data.obj })
            props.data.setarray([...props.data.array])
            props.data.setcount(props.data.count)
            props.data.setobj({})
            props.data.seteditid(props.data.editid)
            fileref.current.value = ""
        }
    }

    return (
        <div>
            <div className="container text-bg-dark rounded-3 py-5 my-3">
                <h1 className='text-center py-3'>First Form</h1>
                <Form className=''>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="title" className='fs-5'>
                                    Title
                                </Label>
                                <Input
                                    id="title"
                                    name="title"
                                    type="text"
                                    value={props.data.obj.title || ''}
                                    placeholder='Add Title'
                                    onChange={changedata}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="subtitle" className='fs-5'>
                                    SubTitle
                                </Label>
                                <Input
                                    id="subtitle"
                                    name="subtitle"
                                    type="text"
                                    value={props.data.obj.subtitle || ''}
                                    placeholder="Sub Title"
                                    onChange={changedata}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="age" className='fs-5'>
                                    Age
                                </Label>
                                <Input
                                    id="age"
                                    name="age"
                                    type="number"
                                    value={props.data.obj.age || ''}
                                    placeholder="Age"
                                    onChange={changedata}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <FormGroup>
                                <Label for="image" className='fs-5'>
                                    Image
                                </Label>
                                <input
                                    id="image"
                                    name="image"
                                    type="file"
                                    placeholder='File'
                                    onChange={changedata}
                                    ref={fileref}
                                    className='form-control'
                                />
                            </FormGroup>
                        </Col>

                    </Row>
                    <Row>
                        <Col md={12}>
                            <FormGroup>
                                <Label for="information" className='fs-5'>
                                    Information
                                </Label>
                                <Input
                                    id="information"
                                    name="information"
                                    placeholder="Enter Description"
                                    type='textarea'
                                    value={props.data.obj.information || ""}
                                    onChange={changedata}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <div className='text-center'>
                        <Button className='' onClick={save}>
                            Sign in
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default FormComponent
