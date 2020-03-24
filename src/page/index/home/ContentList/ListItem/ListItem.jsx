import React from 'react'
import './ListItem.scss'

/**
 * @constructor <ListItem/>
 * @description ListItem
 */

export default function ListItem(props) {
      const { pic_url, brand_type, name,
            wm_poi_score, month_sale_num, distance,
            mt_delivery_time, min_price_tip, delivery_type,
            discounts2
      } = props.data
      function renderBrand(brand_type) {
            if (brand_type) {
                  return <div className="brand brand-pin">品牌</div>
            } else {
                  return <div className="brand brand-xin">新到</div>
            }
      }
      function renderScore(data) {
            let wm_poi_score = data || ''
            let score = wm_poi_score.toString();
            let scoreArray = score.split('.');
            let fullstar = parseInt(scoreArray[0])
            let halfstar = parseInt(scoreArray[1]) >= 5 ? 1 : 0
            let nullstar = 5 - fullstar - halfstar
            let starJsx = [];
            for (let i = 0; i < fullstar; i++) {
                  starJsx.push(
                        <div key={i + 'full'} className='star fullstar'></div>
                  )
            }
            if (halfstar) {
                  for (let i = 0; i < halfstar; i++) {
                        starJsx.push(
                              <div key={i + 'half'} className='star halfstar'></div>
                        )
                  }
            }
            if (nullstar) {
                  for (let i = 0; i < nullstar; i++) {
                        starJsx.push(
                              <div key={i + 'null'} className='star nullstar'></div>
                        )
                  }
            }
            return starJsx
      }
      function renderMonthNum(data) {
            if (data > 999) {
                  return '999+'
            }
            return data
      }
      function renderMeiTuanFlag(data) {
            if (data) {
                  return <div className='item-meituan-flag'>美团转送</div>
            }
            return null
      }
      function renderOthers(data) {
            let array = data
            return array.map((i, index) => {
                  return (
                        <div key={index} className="other-info">
                              <img className='other-tag' src={i.icon_url} alt="" />
                              <span className="other-content">{i.info}</span>
                        </div>
                  )
            })
      }
      return (
            <div className='item-content scale-1px'>
                  <img className='item-img' src={pic_url} alt="" />
                  {
                        renderBrand(brand_type)
                  }
                  <div className='item-info-content'>
                        <p className="item-title">{name}</p>
                        <div className="item-desc">
                              <span className="item-score">
                                    {
                                          renderScore(wm_poi_score)
                                    }
                              </span>
                              <span className="item-count">月售{renderMonthNum(month_sale_num)}</span>
                              <span className="item-distance">&nbsp;{distance}</span>
                              <span className="item-time">{mt_delivery_time}</span>
                        </div>
                        <div className="item-price">
                              <div className="item-pre-price">￥{min_price_tip}</div>
                              {
                                    renderMeiTuanFlag(delivery_type)
                              }
                        </div>
                        <div className="item-ohters">
                              {
                                    renderOthers(discounts2)
                              }
                        </div>
                  </div>
            </div>
      )
}

