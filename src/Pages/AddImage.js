import React, { Component } from 'react';
import SelectCategory from '../components/SelectCategory';

class AddImage extends Component {
  state = {
    nameCategory: '',
    nameFile: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    console.log(name);
    console.log(value);
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    //this.props.saveContact({ ...this.state });
    this.resetForm();
  };

  resetForm() {
    this.setState({ nameCategory: '', nameFile: '' });
  }

  render() {
    return (
      <>
        <div className="contentForm">
          <h1>Добавление фотографий</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="divTable">
              <div className="divTableBody">
                <div className="divTableRow">
                  <div className="divTableCell">
                    <label>выберите категорию</label>
                  </div>
                  <div className="divTableCell">
                    <SelectCategory onChange={this.handleChange} />
                  </div>
                </div>
                <div className="divTableRow">
                  <div className="divTableCell">
                    <label>Введите название файла</label>
                  </div>
                  <div className="divTableCell">
                    <input
                      type="text"
                      name="nameFile"
                      id="imgFace"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="buttonAdd">
              <input type="submit" value="Отправить" />
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default AddImage;
