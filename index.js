class Todo {
  /**
   * @param {number} id - 아이디
   * @param {string} content - 내용
   * @param {boolean} compeleted - 완료 여부
   * @param {string} category - 카테고리
   * @param {object} tags - 태그들
   */
  constructor(id, content, compeleted, category, tags) {
    this.id = id;
    this.content = content;
    this.compeleted = compeleted;
    this.category = category;
    this.tags = tags;
  }
}

/**
 * 할 일을 추가한다.
 * 내용없이 추가할 수 없다.
 * @param {Todo}
 */
const createTodo = (item) => {}

/**
 * 모든 할 일을 조회할 수 있다.
 * ID를 기반으로 특정 할 일을 조회할 수 있다.
 * @param {number} - id
 * @return {Todo[]}
 */
const readTodo = (id) => {}

/**
 * ID를 제외한 모든 속성을 수정한다.
 * 특정 할 일의 특정 태그를 수정한다.
 * @param {number} id - 수정할 todo의 id
 * @param {{ content, compeleted, category, tags }} item - 수정할 내용
 */
const updateTodo = (id, item) => {}

/**
 * 모든 할 일을 제거한다.
 * ID를 기반으로 특정 할 일을 삭제한다.
 * @param {number} id
 */
const deleteTodo = (id) => {}

/**
 * 특정 할 일의 모든 태그를 제거할 수 있다.
 * 특정 할 일의 특정 태그를 삭제할 수 있다.
 * @param {number} id - 삭제할 todo의 id
 * @param {string} tag - 삭제할 todo의 id 삭제할 tag
 */
const deleteTodoTag = (id, tag) => {}