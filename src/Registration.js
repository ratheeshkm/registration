import React, { Fragment } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().trim().required('Required'),
  email: yup.string().trim().required('Required').email('Invalid Email'),
  password: yup
    .string()
    .trim()
    .required('Required')
    .min(3, 'Minimum 3 charactor')
    .max(8, 'Max 8 charactorr'),
  confirm_password: yup
    .string()
    .trim()
    .required('Required')
    .min(3, 'Minimum 3 charactor')
    .max(8, 'Max 8 charactorr')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const Registration = () => {
  const { register, handleSubmit, watch, errors } = useForm({
    mode: 'onBlur | onChange',
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <Fragment>
      <Container
        className="bg-info clearfix"
        style={{ padding: '2em', color: '#FFF' }}
      >
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
              <FormGroup>
                <Label for="Name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  innerRef={register}
                  invalid={!!errors.name}
                  data-testid="name"
                />
                <div className="text-danger">
                  {errors.name && errors.name.message}
                </div>
              </FormGroup>
              <FormGroup>
                <Label for="Email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  innerRef={register}
                  invalid={!!errors.email}
                  data-testid="email"
                />
                <div className="text-danger">
                  {errors.email && errors.email.message}
                </div>
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  innerRef={register}
                  invalid={!!errors.password}
                  data-testid="password"
                />
                <div className="text-danger">
                  {errors.password && errors.password.message}
                </div>
              </FormGroup>
              <FormGroup>
                <Label for="confirm password">Confirm Password</Label>
                <Input
                  type="password"
                  name="confirm_password"
                  innerRef={register}
                  invalid={!!errors.confirm_password}
                  data-testid="confirm_password"
                />
                <div className="text-danger">
                  {errors.confirm_password && errors.confirm_password.message}
                </div>
              </FormGroup>
              <Button className="float-right">Submit</Button>
            </form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Registration;
