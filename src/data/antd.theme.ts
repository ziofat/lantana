import { Theme } from '../types/theme';

const AntTheme: Theme = {
	id: 'antd',
	name: 'Ant Design',
	hues: [
		{
			id: 'red',
			name: 'Red',
			primary: '#F04134',
			shades: [
				{ name: 'red-1', colour: '#FEF0EF', white_ink: false },
				{ name: 'red-2', colour: '#FCDBD9', white_ink: false },
				{ name: 'red-3', colour: '#FABEB9', white_ink: false },
				{ name: 'red-4', colour: '#F79992', white_ink: false },
				{ name: 'red-5', colour: '#F46E65', white_ink: false },
				{ name: 'red-6', colour: '#F04134', white_ink: true },
				{ name: 'red-7', colour: '#D73435', white_ink: true },
				{ name: 'red-8', colour: '#BD2636', white_ink: true },
				{ name: 'red-9', colour: '#A31837', white_ink: true },
				{ name: 'red-10', colour: '#880A38', white_ink: true },
			]
		},
		{
			id: 'green',
			name: 'Green',
			primary: '#00A854',
			shades: [
				{ name: 'green-1', colour: '#EBF8F2', white_ink: false },
				{ name: 'green-2', colour: '#CFEFDF', white_ink: false },
				{ name: 'green-3', colour: '#A7E1C4', white_ink: false },
				{ name: 'green-4', colour: '#76D0A3', white_ink: false },
				{ name: 'green-5', colour: '#3DBD7D', white_ink: false },
				{ name: 'green-6', colour: '#00A854', white_ink: true },
				{ name: 'green-7', colour: '#00924C', white_ink: true },
				{ name: 'green-8', colour: '#007B43', white_ink: true },
				{ name: 'green-9', colour: '#00643B', white_ink: true },
				{ name: 'green-10', colour: '#004C32', white_ink: true },
			]
		},
		{
			id: 'blue',
			name: 'Blue',
			primary: '#108EE9',
			shades: [
				{ name: 'blue-1', colour: '#ECF6FD', white_ink: false },
				{ name: 'blue-2', colour: '#D2EAFB', white_ink: false },
				{ name: 'blue-3', colour: '#ADD8F7', white_ink: false },
				{ name: 'blue-4', colour: '#7EC2F3', white_ink: false },
				{ name: 'blue-5', colour: '#49A9EE', white_ink: false },
				{ name: 'blue-6', colour: '#108EE9', white_ink: true },
				{ name: 'blue-7', colour: '#0E77CA', white_ink: true },
				{ name: 'blue-8', colour: '#0C60AA', white_ink: true },
				{ name: 'blue-9', colour: '#09488A', white_ink: true },
				{ name: 'blue-10', colour: '#073069', white_ink: true },
			]
		},
		{
			id: 'pink',
			name: 'Pink',
			primary: '#F5317F',
			shades: [
				{ name: 'pink-1', colour: '#FEEFF5', white_ink: false },
				{ name: 'pink-2', colour: '#FDD8E7', white_ink: false },
				{ name: 'pink-3', colour: '#FCB8D3', white_ink: false },
				{ name: 'pink-4', colour: '#FA90BA', white_ink: false },
				{ name: 'pink-5', colour: '#F7629E', white_ink: false },
				{ name: 'pink-6', colour: '#F5317F', white_ink: true },
				{ name: 'pink-7', colour: '#DC277D', white_ink: true },
				{ name: 'pink-8', colour: '#C11C7B', white_ink: true },
				{ name: 'pink-9', colour: '#A71278', white_ink: true },
				{ name: 'pink-10', colour: '#8C0776', white_ink: true },
			]
		},
		{
			id: 'orange',
			name: 'Orange',
			primary: '#F56A00',
			shades: [
				{ name: 'orange-1', colour: '#FEF3EB', white_ink: false },
				{ name: 'orange-2', colour: '#FDE3CF', white_ink: false },
				{ name: 'orange-3', colour: '#FCCCA7', white_ink: false },
				{ name: 'orange-4', colour: '#FAAF76', white_ink: false },
				{ name: 'orange-5', colour: '#F78E3D', white_ink: false },
				{ name: 'orange-6', colour: '#F56A00', white_ink: true },
				{ name: 'orange-7', colour: '#D75000', white_ink: true },
				{ name: 'orange-8', colour: '#B93600', white_ink: true },
				{ name: 'orange-9', colour: '#991B00', white_ink: true },
				{ name: 'orange-10', colour: '#7A0000', white_ink: true },
			]
		},
		{
			id: 'purple',
			name: 'Purple',
			primary: '#7265E6',
			shades: [
				{ name: 'purple-1', colour: '#F4F3FD', white_ink: false },
				{ name: 'purple-2', colour: '#E4E2FA', white_ink: false },
				{ name: 'purple-3', colour: '#CFCAF6', white_ink: false },
				{ name: 'purple-4', colour: '#B3ACF2', white_ink: false },
				{ name: 'purple-5', colour: '#948AEC', white_ink: false },
				{ name: 'purple-6', colour: '#7265E6', white_ink: true },
				{ name: 'purple-7', colour: '#6252CD', white_ink: true },
				{ name: 'purple-8', colour: '#533EB4', white_ink: true },
				{ name: 'purple-9', colour: '#42299A', white_ink: true },
				{ name: 'purple-10', colour: '#321580', white_ink: true },
			]
		},
		{
			id: 'yellow',
			name: 'Yellow',
			primary: '#FFBF00',
			shades: [
				{ name: 'yellow-1', colour: '#FFFAEB', white_ink: false },
				{ name: 'yellow-2', colour: '#FFF3CF', white_ink: false },
				{ name: 'yellow-3', colour: '#FFE9A7', white_ink: false },
				{ name: 'yellow-4', colour: '#FFDD76', white_ink: false },
				{ name: 'yellow-5', colour: '#FFCE3D', white_ink: false },
				{ name: 'yellow-6', colour: '#FFBF00', white_ink: true },
				{ name: 'yellow-7', colour: '#E09A00', white_ink: true },
				{ name: 'yellow-8', colour: '#C17500', white_ink: true },
				{ name: 'yellow-9', colour: '#A04F00', white_ink: true },
				{ name: 'yellow-10', colour: '#802800', white_ink: true },
			]
		},
		{
			id: 'cyan',
			name: 'Cyan',
			primary: '#00A2AE',
			shades: [
				{ name: 'cyan-1', colour: '#EBF8F9', white_ink: false },
				{ name: 'cyan-2', colour: '#CFEDF0', white_ink: false },
				{ name: 'cyan-3', colour: '#A7DFE3', white_ink: false },
				{ name: 'cyan-4', colour: '#76CDD3', white_ink: false },
				{ name: 'cyan-5', colour: '#3DB8C1', white_ink: false },
				{ name: 'cyan-6', colour: '#00A2AE', white_ink: true },
				{ name: 'cyan-7', colour: '#008997', white_ink: true },
				{ name: 'cyan-8', colour: '#00707F', white_ink: true },
				{ name: 'cyan-9', colour: '#005667', white_ink: true },
				{ name: 'cyan-10', colour: '#003C4E', white_ink: true },
			]
		},
		{
			id: 'grey',
			name: 'Grey',
			primary: '#BFBFBF',
			shades: [
				{ name: 'grey-1', colour: '#FBFBFB', white_ink: false },
				{ name: 'grey-2', colour: '#F7F7F7', white_ink: false },
				{ name: 'grey-3', colour: '#F5F5F5', white_ink: false },
				{ name: 'grey-4', colour: '#E9E9E9', white_ink: false },
				{ name: 'grey-5', colour: '#D9D9D9', white_ink: false },
				{ name: 'grey-6', colour: '#BFBFBF', white_ink: true },
				{ name: 'grey-7', colour: '#919191', white_ink: true },
				{ name: 'grey-8', colour: '#5A5A5A', white_ink: true },
				{ name: 'grey-9', colour: '#404040', white_ink: true },
				{ name: 'grey-10', colour: '#222222', white_ink: true },
			]
		},
	]
};

export default AntTheme;
