import React from 'react'
import PageFooter from '../../container/PageFooter';
import Button from '../../components/Button';

import productImage from '../../assets/product-image.svg';
import ideal from '../../assets/ideal-payment.svg';
import klarana from '../../assets/klarna-payment.svg';
import amex from '../../assets/amex-payment.svg';
import master from '../../assets/master-payment.svg';
import visa from '../../assets/visa-payment.svg';
import paypal from '../../assets/paypal.svg';
import mister from '../../assets/mister-payment.svg';


import styles from './style.module.css';
import { Form, Input, Card, Collapse, Radio, Checkbox, Select } from 'antd';


import './antd-override.css';

const { Panel } = Collapse;

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

const DeliveryOption = ({form}) => {
    return (
        <>
            <Collapse expandIcon={() => <Radio />} className='shippingCollapse'>
                <Panel header={<div className={styles.chippingCollapseContainer}><span className={styles.shippingChildFirst}>Post NL  location near you</span><span className={styles.shippingChildSecond}>Free</span></div>} key="1">
                    <Form form={form}>
                        <Form.Item
                            name="deliveryLocation"
                            label="Select delivery location"
                            rules={[{ required: true, message: 'Please select delivery location!' }]}
                        >
                            <Select
                                placeholder="select your country"
                                defaultValue='Great Britain'
                                options={[
                                    {
                                        name: 'USA',
                                        label: 'USA',
                                    }, {
                                        name: 'Great Britain',
                                        label: 'Great Britain',
                                    }, {
                                        name: 'Ukrain',
                                        label: 'Ukrain',
                                    }]}
                                className="selectInput"
                            />
                        </Form.Item>

                        <Form.Item
                            name="deliveryDate"
                            label="Select the desired delivery date:"
                            rules={[{ required: true, message: 'Please select delivery date!' }]}
                        >
                            <Select
                                placeholder="select your country"
                                defaultValue='Great Britain'
                                options={[
                                    {
                                        name: 'USA',
                                        label: 'USA',
                                    }, {
                                        name: 'Great Britain',
                                        label: 'Great Britain',
                                    }, {
                                        name: 'Ukrain',
                                        label: 'Ukrain',
                                    }]}
                            />
                        </Form.Item>

                        <Form.Item label="Evening delivery +1.5,-" name="eveningDelivery" className='checkboxForm'>
                            <Checkbox />
                        </Form.Item>

                        <Form.Item label="Do not deliver to neighbours / Niet bij de buren bezorgen" name="noDeliverToNeighbours" className='checkboxForm'>
                            <Checkbox />
                        </Form.Item>
                    </Form>
                </Panel>
            </Collapse>

            <Collapse expandIcon={() => <Radio />} className='shippingCollapse'>
                <Panel header={<div className={styles.chippingCollapseContainer}><span className={styles.shippingChildFirst}>Delivery to billing address</span><span className={styles.shippingChildSecond}>Free</span></div>} key="1">
                    <div className={styles.billingAddressText}>Your shipment will be delivered to the billing address above.</div>
                </Panel>
            </Collapse>

            <Collapse expandIcon={() => <Radio />} className='shippingCollapse'>
                <Panel header={<div className={styles.chippingCollapseContainer}><span className={styles.shippingChildFirst}>Different delivery address</span><span className={styles.shippingChildSecond}>Free</span></div>} key="1">
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
                        <div className={styles.formInputTwoCol} style={{ marginBottom: 20 }}>
                            <Form.Item label="Post Code" name="postCode" rules={[{ required: true, message: 'This field is madatory' }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item label="House Number" name="houseNumber" rules={[{ required: true, message: 'This field is madatory' }]}>
                                <Input />
                            </Form.Item>
                        </div>
                    </Form>
                </Panel>
            </Collapse>
        </>
    );
}

const PaymentOption = () => {
    return (
        <>
        <Collapse accordion={false} expandIcon={() => <Radio />} className='shippingCollapse'>
        <Panel isActive={false} header={<div className={styles.chippingCollapseContainer}><span className={styles.shippingChildFirst}>iDeal</span><span className={`${styles.shippingChildSecond} ${styles.paymentsIcon}`}><img src={ideal} width={35}/></span></div>} key="1" className="collapsePanel"/>    
        </Collapse>

    <Collapse accordion={false} expandIcon={() => <Radio />} className='shippingCollapse'>
        <Panel header={<div className={styles.chippingCollapseContainer}><span className={styles.shippingChildFirst}>Klarna</span><span className={`${styles.shippingChildSecond} ${styles.paymentsIcon}`}><img src={klarana} width={35}/></span></div>} key="1" className="collapsePanel" />
    </Collapse>

    <Collapse accordion={false} expandIcon={() => <Radio />} className='shippingCollapse'>
        <Panel header={<div className={styles.chippingCollapseContainer}><span className={styles.shippingChildFirst}>Credit Card</span><span className={`${styles.shippingChildSecond} ${styles.paymentsIcon}`}><img src={visa} width={35} className={styles.marginRight}/><img src={master} width={35} className={styles.marginRight} /><img src={amex} width={35} /></span></div>} key="1" className="collapsePanel" />
    </Collapse>

    <Collapse accordion={false} expandIcon={() => <Radio />} className='shippingCollapse'>
        <Panel header={<div className={styles.chippingCollapseContainer}><span className={styles.shippingChildFirst}>Pay Pal</span><span className={`${styles.shippingChildSecond} ${styles.paymentsIcon}`}><img src={paypal} width={35}/></span></div>} key="1" className="collapsePanel" />
    </Collapse>

    <Collapse accordion={false} expandIcon={() => <Radio />} className='shippingCollapse'>
        <Panel header={<div className={styles.chippingCollapseContainer}><span className={styles.shippingChildFirst}>Mister Cash</span><span className={`${styles.shippingChildSecond} ${styles.paymentsIcon}`}><img src={mister} width={35}/></span></div>} key="1" className="collapsePanel" />
    </Collapse>
</>
    );
}

const ShippingForm = () => {
    const [form] = Form.useForm();
    const [moveToPayment, setMoveToPayment] = React.useState(false);

    React.useEffect(()=>{
        console.log(moveToPayment)
    }, [moveToPayment])

    const handleClickToPayments = () => {
        setMoveToPayment(true);
    }

    return (
        <>
            <Card title="Billing address" style={{ width: 630 }} className="shippingAddressCard">
                <div>Joanne  Hartmann</div>
                <div>+31 71 774 0192</div>
                <div>Haltestraat 34, Zandvoort, North Holland, 2042 LN, Netherlands</div>
                <div className={styles.editLink}>Edit</div>
            </Card>

            <div className={styles.deliveryContainer}>
                <div className={styles.deliveryTitle}>Delivery</div>

                {
                    !moveToPayment?
                    <DeliveryOption form={form} />
                    : <PaymentOption form={form} />
                }
            </div>

            <Button text="Proceed to payment" style={{ marginTop: 40, padding: '12px 20px', cursor: 'pointer' }} onClick={handleClickToPayments} />
        </>
    );
}


function Shipping() {
    return (
        <>
            <section className={styles.billingContainer}>
                <div className={styles.leftSideContainer}>
                    <div className={styles.billingLoginHeading}>
                        <span className={styles.orderPlaceTitle}>You haven't placed any orders yet.</span>
                        <span className={styles.loginLink}>Log in</span>
                    </div>
                    <div className={styles.billingTitle}>Billing address </div>
                    <ShippingForm />
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

export default Shipping;