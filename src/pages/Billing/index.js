import React from 'react'
import PageFooter from '../../container/PageFooter';
import Button from '../../components/Button';

import productImage from '../../assets/product-image.svg';

import styles from './style.module.css';
import { Form, Input, Select, Checkbox } from 'antd';

import './antd-override.css';
import { useHistory } from 'react-router-dom';

const ProductInfo = () => {
    return (
        <div className={styles.productInfoColumn}>
            <div className={styles.productImage}>
                <img src={productImage} width={160} />
            </div>
            <div className={styles.productInfo}>
                <div className={styles.productName}>Synofit Premium Plus Liquid</div>
                <div className={styles.productDetails}>
                    <span className={styles.productField}>200 ML</span>
                </div>
                <div className={styles.productTotalPrice}>
                    <span className={styles.productValues}>60,-</span>
                </div>
            </div>
        </div>
    );
}

const BillingForm = () => {
    const [form] = Form.useForm();
    const history = useHistory();
    return (
        <Form form={form}>
            <Form.Item label="Email" name="email">
                <Input />
            </Form.Item>
            <Form.Item label="Phone Number" name="phoneNumber">
                <Input />
            </Form.Item>
            <Form.Item label="First name" name="firstName">
                <Input />
            </Form.Item>
            <div className={styles.formInputTwoCol}>
                <Form.Item label="Tussenvoegsel (optional)" name="Tussenvoegsel">
                    <Input />
                </Form.Item>
                <Form.Item label="Last Name" name="lastName">
                    <Input />
                </Form.Item>
            </div>
            <Form.Item label="Company (Optional)" name="company">
                <Input />
            </Form.Item>
            <Form.Item
                name="country"
                label="Country"
                rules={[{ required: true, message: 'Please select country!' }]}
            >
                <Select placeholder="select your country" defaultValue='Great Britain' options={[{
                    name: 'USA',
                    label: 'USA',
                }, {
                    name: 'Great Britain',
                    label: 'Great Britain',
                },
                {
                    name: 'Ukrain',
                    label: 'Ukrain',
                }]} />
            </Form.Item>
            <div className={styles.formInputTwoCol}>
                <Form.Item label="Post Code" name="postCode" rules={[{ required: true, message: 'This field is madatory' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="House Number" name="houseNumber" rules={[{ required: true, message: 'This field is madatory' }]}>
                    <Input />
                </Form.Item>
            </div>
            <Form.Item label="I want to create an account" name="createAccount" className='checkboxForm'>
                <Checkbox />
            </Form.Item>

            <div className={styles.desclaimer}>
            After you placed an order, you’ll get an email with the link to create password for your account.
            </div>

            <Button text='Proceed to shipping' style={{ padding: '12px 30px', cursor: 'pointer' }} onClick={()=>history.push('/shipping')} />
        </Form>
    );
}

function Billing() {
    return (
        <>
            <section className={styles.billingContainer}>
                <div className={styles.leftSideContainer}>
                    <div className={styles.billingLoginHeading}>
                        <span className={styles.orderPlaceTitle}>You haven't placed any orders yet.</span>
                        <span className={styles.loginLink}>Log in</span>
                    </div>
                    <div className={styles.billingTitle}>Billing address </div>
                    <BillingForm />
                </div>
                <div className={styles.rightSideContainer}>
                    <div className={styles.productPurchaseInfo}>
                        <ProductInfo />
                    </div>
                    <div className={styles.discount}>
                        <div className={styles.discountInput}>Discount</div>
                        <Button text="apply" style={{ textTransform: 'uppercase', background: '#003049', padding: '12px 34px' }} />
                    </div>

                    <div className={styles.cartPriceDetails}>
                        <div className={styles.priceDetailsRow}>
                            <span className={styles.priceDetailsField}>Subtotal</span>
                            <span className={styles.priceDetailsValue}>60,- </span>
                        </div>
                        <div className={styles.priceDetailsRow}>
                            <span className={styles.priceDetailsField}>Subtotal</span>
                            <span className={styles.priceDetailsValue}>60,- </span>
                        </div>
                    </div>

                    <div className={styles.priceTotalRow}>
                        <span className={styles.priceTotalField}>Total</span>
                        <span className={styles.priceTotalField}>60,- </span>
                    </div>
                </div>
            </section>
            <div style={{ marginTop: 30 }}>
                <PageFooter />
            </div>
        </>
    )
}

export default Billing