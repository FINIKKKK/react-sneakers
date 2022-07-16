import React from 'react'

import { CartItem } from '../components'



function CartMini({ onClose, items, onRemoveItem }) {


  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img onClick={onClose} className="cu-p" src="/img/btn-remove.svg" alt="Remove" />
        </h2>

        {
          items.length > 0 ?
            (
              <div>
                <div className="items">
                  {
                    items &&
                    items.map((obj, index) => (
                      <CartItem
                        key={`${obj.title}_${index}`}
                        id={obj.id}
                        img={obj.img}
                        title={obj.title}
                        price={obj.price}
                        onRemove={onRemoveItem}
                      />
                    ))
                  }

                  {/* <div key={`${obj.title}_${index}`} className="cartItem d-flex align-center mb-20" >
                        <div
                          style={{ backgroundImage: `url(${obj.img})` }}
                          className="cartItemImg"></div>

                        <div className="mr-20 flex">
                          <p className="mb-5">{obj.title}</p>
                          <b>{obj.price} руб.</b>
                        </div>
                        <img onClick={() => onRemoveItem(obj.id)} className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                      </div> */}
                </div>

                <div className="cartTotalBlock">
                  <ul>
                    <li>
                      <span>Итого:</span>
                      <div></div>
                      <b>21 498 руб. </b>
                    </li>
                    <li>
                      <span>Налог 5%:</span>
                      <div></div>
                      <b>1074 руб. </b>
                    </li>
                  </ul>
                  <button className="greenButton">
                    Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
                  </button>
                </div>
              </div>
            )


            : (
              <div class="cartEmpty d-flex align-center justify-center flex-column flex">
                <img class="mb-20" width="120px" height="120px" src="/img/empty-cart.jpg" alt="Empty" />
                <h2>Корзина пустая</h2>
                <p class="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                <button onClick={onClose} class="greenButton">
                  <img onClick={onClose} src="/img/arrow.svg" alt="Arrow" />
                  Вернуться назад
                </button>
              </div>
            )
        }

      </div>
    </div>
  )
}

export default CartMini