/*
 * @CopyRight: 广州仰望星空云科技有限公司
 * @Author: linkaiyan
 * @Email: linkaiyan@xinyu668.com
 * @Date: 2025-04-02 14:17:41
 * @LastEditTime: 2025-05-10 03:17:11
 * @LastEditors: linkaiyan
 * @Description: 
 */
import LButton from './components/LButton'

const components = [LButton];

const fn = () => {
  
}

const install = (app) => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export {
  LButton
}

export default {
  install,
}