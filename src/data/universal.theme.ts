import { Theme } from '../types/theme';

const UniversalTheme: Theme = {
	id: 'universal',
	name: 'Universal',
	hues: [
		{
			id: 'red',
			name: 'Red',
			primary: '#E81123',
			shades: [
				{ name: '3 shades lighter', colour: '#F4ABBA', white_ink: false },
				{ name: '2 shades lighter', colour: '#E6808A', white_ink: false },
				{ name: '1 shades lighter', colour: '#E74856', white_ink: false },
				{ name: 'Sample acent color', colour: '#E81123', white_ink: true },
				{ name: '3 shades darker', colour: '#C50F1F', white_ink: true },
				{ name: '3 shades darker', colour: '#A80000', white_ink: true },
				{ name: '3 shades darker', colour: '#750B1C', white_ink: true },
			]
		},
		{
			id: 'orangeRed',
			name: 'Orange Red',
			primary: '#F03A17',
			shades: [
				{ name: '3 shades lighter', colour: '#EEC7C2', white_ink: false },
				{ name: '2 shades lighter', colour: '#EE9889', white_ink: false },
				{ name: '1 shades lighter', colour: '#EF6950', white_ink: false },
				{ name: 'Sample acent color', colour: '#F03A17', white_ink: true },
				{ name: '3 shades darker', colour: '#DA3B01', white_ink: true },
				{ name: '3 shades darker', colour: '#A52613', white_ink: true },
				{ name: '3 shades darker', colour: '#7F1D10', white_ink: true },
			]
		},
		{
			id: 'darkOrange',
			name: 'Dark Orange',
			primary: '#F7630C',
			shades: [
				{ name: '3 shades lighter', colour: '#F2D5C9', white_ink: false },
				{ name: '2 shades lighter', colour: '#F7B189', white_ink: false },
				{ name: '1 shades lighter', colour: '#F7894A', white_ink: false },
				{ name: 'Sample acent color', colour: '#F7630C', white_ink: false },
				{ name: '3 shades darker', colour: '#CA5010', white_ink: true },
				{ name: '3 shades darker', colour: '#A74109', white_ink: true },
				{ name: '3 shades darker', colour: '#7F2F08', white_ink: true },
			]
		},
		{
			id: 'orange',
			name: 'Orange',
			primary: '#FF8C00',
			shades: [
				{ name: '3 shades lighter', colour: '#FFDABB', white_ink: false },
				{ name: '2 shades lighter', colour: '#FFC988', white_ink: false },
				{ name: '1 shades lighter', colour: '#FFAA44', white_ink: false },
				{ name: 'Sample acent color', colour: '#FF8C00', white_ink: false },
				{ name: '3 shades darker', colour: '#D47300', white_ink: false },
				{ name: '3 shades darker', colour: '#B05E0D', white_ink: true },
				{ name: '3 shades darker', colour: '#7F4200', white_ink: true },
			]
		},
		{
			id: 'gold',
			name: 'Gold',
			primary: '#FFB900',
			shades: [
				{ name: '3 shades lighter', colour: '#FFE5B6', white_ink: false },
				{ name: '2 shades lighter', colour: '#FFD679', white_ink: false },
				{ name: '1 shades lighter', colour: '#FFC83D', white_ink: false },
				{ name: 'Sample acent color', colour: '#FFB900', white_ink: false },
				{ name: '3 shades darker', colour: '#EAA300', white_ink: false },
				{ name: '3 shades darker', colour: '#D48C00', white_ink: false },
				{ name: '3 shades darker', colour: '#AB620D', white_ink: true },
			]
		},
		{
			id: 'yellow',
			name: 'Yellow',
			primary: '#FCE100',
			shades: [
				{ name: '3 shades lighter', colour: '#F9F1A5', white_ink: false },
				{ name: '2 shades lighter', colour: '#FAEC6E', white_ink: false },
				{ name: '1 shades lighter', colour: '#FFF100', white_ink: false },
				{ name: 'Sample acent color', colour: '#FCE100', white_ink: false },
				{ name: '3 shades darker', colour: '#DFBE00', white_ink: false },
				{ name: '3 shades darker', colour: '#C19C00', white_ink: false },
				{ name: '3 shades darker', colour: '#986F0B', white_ink: true },
			]
		},
		{
			id: 'yellowGreen',
			name: 'Yellow Green',
			primary: '#BAD80A',
			shades: [
				{ name: '3 shades lighter', colour: '#F8FFB3', white_ink: false },
				{ name: '2 shades lighter', colour: '#E4F577', white_ink: false },
				{ name: '1 shades lighter', colour: '#D1EC3C', white_ink: false },
				{ name: 'Sample acent color', colour: '#BAD80A', white_ink: false },
				{ name: '3 shades darker', colour: '#A4CF0C', white_ink: false },
				{ name: '3 shades darker', colour: '#8CBD18', white_ink: false },
				{ name: '3 shades darker', colour: '#73AA24', white_ink: false },
			]
		},
		{
			id: 'green',
			name: 'Green',
			primary: '#7CD300',
			shades: [
				{ name: '3 shades lighter', colour: '#D5E5AE', white_ink: false },
				{ name: '2 shades lighter', colour: '#B7DF74', white_ink: false },
				{ name: '1 shades lighter', colour: '#9AD93A', white_ink: false },
				{ name: 'Sample acent color', colour: '#7CD300', white_ink: false },
				{ name: '3 shades darker', colour: '#6BB700', white_ink: false },
				{ name: '3 shades darker', colour: '#599B00', white_ink: false },
				{ name: '3 shades darker', colour: '#498205', white_ink: false },
			]
		},
		{
			id: 'lime',
			name: 'Lime',
			primary: '#16C60C',
			shades: [
				{ name: '3 shades lighter', colour: '#AAE5AA', white_ink: false },
				{ name: '2 shades lighter', colour: '#79DB75', white_ink: false },
				{ name: '1 shades lighter', colour: '#47D041', white_ink: false },
				{ name: 'Sample acent color', colour: '#16C60C', white_ink: false },
				{ name: '3 shades darker', colour: '#13A10E', white_ink: false },
				{ name: '3 shades darker', colour: '#107C10', white_ink: false },
				{ name: '3 shades darker', colour: '#0B6A0B', white_ink: false },
			]
		},
		{
			id: 'teal',
			name: 'Teal',
			primary: '#00CC6A',
			shades: [
				{ name: '3 shades lighter', colour: '#A8E5C2', white_ink: false },
				{ name: '2 shades lighter', colour: '#70DDA5', white_ink: false },
				{ name: '1 shades lighter', colour: '#38D487', white_ink: false },
				{ name: 'Sample acent color', colour: '#00CC6A', white_ink: false },
				{ name: '3 shades darker', colour: '#00AE56', white_ink: false },
				{ name: '3 shades darker', colour: '#10893E', white_ink: true },
				{ name: '3 shades darker', colour: '#00722E', white_ink: true },
			]
		},
		{
			id: 'cyan',
			name: 'Cyan',
			primary: '#00CEA6',
			shades: [
				{ name: '3 shades lighter', colour: '#C2F2E9', white_ink: false },
				{ name: '2 shades lighter', colour: '#81E6D3', white_ink: false },
				{ name: '1 shades lighter', colour: '#41DABC', white_ink: false },
				{ name: 'Sample acent color', colour: '#00CEA6', white_ink: false },
				{ name: '3 shades darker', colour: '#00B294', white_ink: false },
				{ name: '3 shades darker', colour: '#008272', white_ink: true },
				{ name: '3 shades darker', colour: '#005E50', white_ink: true },
			]
		},
		{
			id: 'turquoise',
			name: 'Turquoise',
			primary: '#00CEA6',
			shades: [
				{ name: '3 shades lighter', colour: '#91E5DF', white_ink: false },
				{ name: '2 shades lighter', colour: '#61D6D6', white_ink: false },
				{ name: '1 shades lighter', colour: '#30C6CC', white_ink: false },
				{ name: 'Sample acent color', colour: '#00B7C3', white_ink: false },
				{ name: '3 shades darker', colour: '#009CA4', white_ink: false },
				{ name: '3 shades darker', colour: '#038387', white_ink: true },
				{ name: '3 shades darker', colour: '#006666', white_ink: true },
			]
		},
		{
			id: 'skyBlue',
			name: 'Sky Blue',
			primary: '#00BCF2',
			shades: [
				{ name: '3 shades lighter', colour: '#99ECFF', white_ink: false },
				{ name: '2 shades lighter', colour: '#69EAFF', white_ink: false },
				{ name: '1 shades lighter', colour: '#31D2F7', white_ink: false },
				{ name: 'Sample acent color', colour: '#00BCF2', white_ink: false },
				{ name: '3 shades darker', colour: '#0099BC', white_ink: false },
				{ name: '3 shades darker', colour: '#006F94', white_ink: true },
				{ name: '3 shades darker', colour: '#005B70', white_ink: true },
			]
		},
		{
			id: 'dodgerBlue',
			name: 'Dodger Blue',
			primary: '#0078D7',
			shades: [
				{ name: '3 shades lighter', colour: '#B3DBF2', white_ink: false },
				{ name: '2 shades lighter', colour: '#83BEEC', white_ink: false },
				{ name: '1 shades lighter', colour: '#3A96DD', white_ink: false },
				{ name: 'Sample acent color', colour: '#0078D7', white_ink: true },
				{ name: '3 shades darker', colour: '#0063B1', white_ink: true },
				{ name: '3 shades darker', colour: '#004E8C', white_ink: true },
				{ name: '3 shades darker', colour: '#003966', white_ink: true },
			]
		},
		{
			id: 'blue',
			name: 'Blue',
			primary: '#0046FF',
			shades: [
				{ name: '3 shades lighter', colour: '#ABC9ED', white_ink: false },
				{ name: '2 shades lighter', colour: '#7BA7FF', white_ink: false },
				{ name: '1 shades lighter', colour: '#3B78FF', white_ink: false },
				{ name: 'Sample acent color', colour: '#0046FF', white_ink: true },
				{ name: '3 shades darker', colour: '#0037DA', white_ink: true },
				{ name: '3 shades darker', colour: '#0027B4', white_ink: true },
				{ name: '3 shades darker', colour: '#00188F', white_ink: true },
			]
		},
		{
			id: 'mediumBlue',
			name: 'MediumBlue',
			primary: '#2849EC',
			shades: [
				{ name: '3 shades lighter', colour: '#A6BDFF', white_ink: false },
				{ name: '2 shades lighter', colour: '#7C96F9', white_ink: false },
				{ name: '1 shades lighter', colour: '#4F6BED', white_ink: true },
				{ name: 'Sample acent color', colour: '#2849EC', white_ink: true },
				{ name: '3 shades darker', colour: '#203DBD', white_ink: true },
				{ name: '3 shades darker', colour: '#19318D', white_ink: true },
				{ name: '3 shades darker', colour: '#11255E', white_ink: true },
			]
		},
		{
			id: 'royalBlue',
			name: 'Royal Blue',
			primary: '#4F4BD9',
			shades: [
				{ name: '3 shades lighter', colour: '#BEBEE5', white_ink: false },
				{ name: '2 shades lighter', colour: '#9895E6', white_ink: false },
				{ name: '1 shades lighter', colour: '#6B69D6', white_ink: true },
				{ name: 'Sample acent color', colour: '#4F4BD9', white_ink: true },
				{ name: '3 shades darker', colour: '#413EB3', white_ink: true },
				{ name: '3 shades darker', colour: '#32318C', white_ink: true },
				{ name: '3 shades darker', colour: '#242466', white_ink: true },
			]
		},
		{
			id: 'slateBlue',
			name: 'Slate Blue',
			primary: '#7160E8',
			shades: [
				{ name: '3 shades lighter', colour: '#B5B5E2', white_ink: false },
				{ name: '2 shades lighter', colour: '#A297E6', white_ink: false },
				{ name: '1 shades lighter', colour: '#8378DE', white_ink: false },
				{ name: 'Sample acent color', colour: '#7160E8', white_ink: true },
				{ name: '3 shades darker', colour: '#5A4EBC', white_ink: true },
				{ name: '3 shades darker', colour: '#49409A', white_ink: true },
				{ name: '3 shades darker', colour: '#373277', white_ink: true },
			]
		},
		{
			id: 'mediumSlateBlue',
			name: 'Medium Slate Blue',
			primary: '#886CE4',
			shades: [
				{ name: '3 shades lighter', colour: '#C3C3F4', white_ink: false },
				{ name: '2 shades lighter', colour: '#C2B8E6', white_ink: false },
				{ name: '1 shades lighter', colour: '#9C89E9', white_ink: false },
				{ name: 'Sample acent color', colour: '#886CE4', white_ink: false },
				{ name: '3 shades darker', colour: '#735BC1', white_ink: true },
				{ name: '3 shades darker', colour: '#5E4A9D', white_ink: true },
				{ name: '3 shades darker', colour: '#49397A', white_ink: true },
			]
		},
		{
			id: 'indigo',
			name: 'Indigo',
			primary: '#744DA9',
			shades: [
				{ name: '3 shades lighter', colour: '#CFC4F5', white_ink: false },
				{ name: '2 shades lighter', colour: '#C2ADE0', white_ink: false },
				{ name: '1 shades lighter', colour: '#8764B8', white_ink: true },
				{ name: 'Sample acent color', colour: '#744DA9', white_ink: true },
				{ name: '3 shades darker', colour: '#5C2E91', white_ink: true },
				{ name: '3 shades darker', colour: '#4E257F', white_ink: true },
				{ name: '3 shades darker', colour: '#401B6C', white_ink: true },
			]
		},
		{
			id: 'darkViolet',
			name: 'Dark Violet',
			primary: '#881798',
			shades: [
				{ name: '3 shades lighter', colour: '#DEA2ED', white_ink: false },
				{ name: '2 shades lighter', colour: '#DB8AE6', white_ink: false },
				{ name: '1 shades lighter', colour: '#B146C2', white_ink: true },
				{ name: 'Sample acent color', colour: '#881798', white_ink: true },
				{ name: '3 shades darker', colour: '#721481', white_ink: true },
				{ name: '3 shades darker', colour: '#5C126B', white_ink: true },
				{ name: '3 shades darker', colour: '#460F54', white_ink: true },
			]
		},
		{
			id: 'purple',
			name: 'Purple',
			primary: '#B4009E',
			shades: [
				{ name: '3 shades lighter', colour: '#DE94E0', white_ink: false },
				{ name: '2 shades lighter', colour: '#E67ED9', white_ink: false },
				{ name: '1 shades lighter', colour: '#C239B3', white_ink: true },
				{ name: 'Sample acent color', colour: '#B4009E', white_ink: true },
				{ name: '3 shades darker', colour: '#9A0089', white_ink: true },
				{ name: '3 shades darker', colour: '#800074', white_ink: true },
				{ name: '3 shades darker', colour: '#5C005C', white_ink: true },
			]
		},
		{
			id: 'fuchsia',
			name: 'Fuchsia',
			primary: '#E3008C',
			shades: [
				{ name: '3 shades lighter', colour: '#E8A3DE', white_ink: false },
				{ name: '2 shades lighter', colour: '#ED85C5', white_ink: false },
				{ name: '1 shades lighter', colour: '#E43BA6', white_ink: false },
				{ name: 'Sample acent color', colour: '#E3008C', white_ink: true },
				{ name: '3 shades darker', colour: '#BF0077', white_ink: true },
				{ name: '3 shades darker', colour: '#9B0062', white_ink: true },
				{ name: '3 shades darker', colour: '#77004D', white_ink: true },
			]
		},
		{
			id: 'crimson',
			name: 'Crimson',
			primary: '#EA005E',
			shades: [
				{ name: '3 shades lighter', colour: '#EDBED3', white_ink: false },
				{ name: '2 shades lighter', colour: '#EB81AB', white_ink: false },
				{ name: '1 shades lighter', colour: '#EE3F86', white_ink: false },
				{ name: 'Sample acent color', colour: '#EA005E', white_ink: true },
				{ name: '3 shades darker', colour: '#C30052', white_ink: true },
				{ name: '3 shades darker', colour: '#970044', white_ink: true },
				{ name: '3 shades darker', colour: '#6B0036', white_ink: true },
			]
		},
		{
			id: 'coral',
			name: 'Coral',
			primary: '#FF4343',
			shades: [
				{ name: '3 shades lighter', colour: '#FFC0C0', white_ink: false },
				{ name: '2 shades lighter', colour: '#FF8C8C', white_ink: false },
				{ name: '1 shades lighter', colour: '#FF6767', white_ink: false },
				{ name: 'Sample acent color', colour: '#FF4343', white_ink: true },
				{ name: '3 shades darker', colour: '#D13438', white_ink: true },
				{ name: '3 shades darker', colour: '#A4262C', white_ink: true },
				{ name: '3 shades darker', colour: '#761721', white_ink: true },
			]
		},
		{
			id: 'brown',
			name: 'Brown',
			primary: '#AC744C',
			shades: [
				{ name: '3 shades lighter', colour: '#F7D7C4', white_ink: false },
				{ name: '2 shades lighter', colour: '#D8B094', white_ink: false },
				{ name: '1 shades lighter', colour: '#BB9167', white_ink: false },
				{ name: 'Sample acent color', colour: '#AC744C', white_ink: true },
				{ name: '3 shades darker', colour: '#8E562E', white_ink: true },
				{ name: '3 shades darker', colour: '#603D30', white_ink: true },
				{ name: '3 shades darker', colour: '#4D291C', white_ink: true },
			]
		},
		{
			id: 'slateGray',
			name: 'Slate Gray',
			primary: '#567C73',
			shades: [
				{ name: '3 shades lighter', colour: '#CAE0D9', white_ink: false },
				{ name: '2 shades lighter', colour: '#A3BFB7', white_ink: false },
				{ name: '1 shades lighter', colour: '#7D9D95', white_ink: false },
				{ name: 'Sample acent color', colour: '#567C73', white_ink: true },
				{ name: '3 shades darker', colour: '#486860', white_ink: true },
				{ name: '3 shades darker', colour: '#3B534D', white_ink: true },
				{ name: '3 shades darker', colour: '#2D3F3A', white_ink: true },
			]
		},
		{
			id: 'dimGray',
			name: 'Dim Gray',
			primary: '#69797E',
			shades: [
				{ name: '3 shades lighter', colour: '#BAC8CC', white_ink: false },
				{ name: '2 shades lighter', colour: '#A0AEB2', white_ink: false },
				{ name: '1 shades lighter', colour: '#859599', white_ink: false },
				{ name: 'Sample acent color', colour: '#69797E', white_ink: true },
				{ name: '3 shades darker', colour: '#5A686C', white_ink: true },
				{ name: '3 shades darker', colour: '#4A5459', white_ink: true },
				{ name: '3 shades darker', colour: '#394146', white_ink: true },
			]
		},
		{
			id: 'Silver',
			name: 'silver',
			primary: '#7A7574',
			shades: [
				{ name: '3 shades lighter', colour: '#CBC6C4', white_ink: false },
				{ name: '2 shades lighter', colour: '#B1ADAB', white_ink: false },
				{ name: '1 shades lighter', colour: '#989391', white_ink: false },
				{ name: 'Sample acent color', colour: '#7A7574', white_ink: true },
				{ name: '3 shades darker', colour: '#6E6A68', white_ink: true },
				{ name: '3 shades darker', colour: '#5D5A58', white_ink: true },
				{ name: '3 shades darker', colour: '#4C4A48', white_ink: true },
			]
		},
		{
			id: 'gray',
			name: 'Gray',
			primary: '#767676',
			shades: [
				{ name: '3 shades lighter', colour: '#F2F2F2', white_ink: false },
				{ name: '2 shades lighter', colour: '#E6E6E6', white_ink: false },
				{ name: '1 shades lighter', colour: '#CCCCCC', white_ink: false },
				{ name: 'Sample acent color', colour: '#767676', white_ink: true },
				{ name: '3 shades darker', colour: '#393939', white_ink: true },
				{ name: '3 shades darker', colour: '#2B2B2B', white_ink: true },
				{ name: '3 shades darker', colour: '#1F1F1F', white_ink: true },
			]
		},
	]
};

export default UniversalTheme;
