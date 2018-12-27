import axios from 'axios';
class QrApi {

	constructor(options) {
		this.url = 'https://api.banghasan.com/quran/format/json/surat';
		this._options = options;
		// this._data = null;
	}

	build(component=null) {
		axios.get(this.url)
		.then( (response) => {
			component.setState({
				_data: response.data.hasil
			});
		});
	}

}

module.exports = new QrApi;