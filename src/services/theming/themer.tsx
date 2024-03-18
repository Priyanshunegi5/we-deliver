import lodash from 'lodash'
import {
  List,
  Locale,
  Translation,
  I18nextResources,
} from '@/types/localization'

export class Themer {
  /**
   * A list of themes with associated metadata.
   *
   * @var {List} list
   */
  protected list: List

  /**
   * Construct themer instance.
   *
   * @param {List} list
   * @return void
   */
  constructor(list: List) {
    this.list = list
  }
}
