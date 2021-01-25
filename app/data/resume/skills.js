// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [{
  title: 'Javascript ES6+',
  competency: 5,
  category: ['Languages'],
},
{
  title: 'Node.JS',
  competency: 5,
  category: ['Web'],
},
{
  title: 'Jquery',
  competency: 5,
  category: ['Web'],
},
{
  title: 'Vue.JS',
  competency: 5,
  category: ['Web'],
},
{
  title: 'PHP',
  competency: 5,
  category: ['Languages'],
},
{
  title: 'HTML',
  competency: 5,
  category: ['Languages'],
},
{
  title: 'CSS',
  competency: 5,
  category: ['Languages'],
},
{
  title: 'Python',
  competency: 5,
  category: ['Languages'],
},
{
  title: 'C#',
  competency: 5,
  category: ['Languages'],
},
{
  title: 'Java',
  competency: 5,
  category: ['Languages'],
},
{
  title: 'Swift',
  competency: 5,
  category: ['Languages'],
},
{
  title: 'Bash',
  competency: 5,
  category: ['Languages'],
},
{
  title: 'AMPL',
  competency: 5,
  category: ['Languages'],
},
{
  title: 'Laravel',
  competency: 5,
  category: ['Web'],
},
{
  title: 'ReactJS',
  competency: 5,
  category: ['Web'],
},
{
  title: 'AWS',
  competency: 5,
  category: ['Dev Ops'],
},
{
  title: 'Github',
  competency: 5,
  category: ['Dev Ops'],
},
{
  title: 'Docker',
  competency: 5,
  category: ['Dev Ops'],
},
{
  title: 'Apache2',
  competency: 5,
  category: ['Dev Ops'],
},
{
  title: 'SSH',
  competency: 5,
  category: ['Dev Ops'],
},
{
  title: 'IPSEC/SSL VPNs',
  competency: 5,
  category: ['Dev Ops'],
},
{
  title: 'Network Admin',
  competency: 5,
  category: ['Dev Ops'],
},
{
  title: 'MongoDB',
  competency: 5,
  category: ['Databases'],
},
{
  title: 'PostgreSQL',
  competency: 5,
  category: ['Databases'],
},
{
  title: 'MySQL',
  competency: 5,
  category: ['Databases'],
},
{
  title: 'ElasticSearch',
  competency: 5,
  category: ['Databases'],
},
{
  title: 'SQLite3',
  competency: 5,
  category: ['Databases'],
},
{
  title: 'Redis',
  competency: 5,
  category: ['Databases'],
},
{
  title: 'AI Ops',
  competency: 5,
  category: ['Dev Ops'],
},
{
  title: 'Data Mining',
  competency: 5,
  category: ['Data Science'],
},
{
  title: 'Kubernetes',
  competency: 5,
  category: ['Dev Ops'],
},
{
  title: 'Nvidia Jetpack',
  competency: 5,
  category: ['Dev Ops'],
},
{
  title: 'ARM64/ARMV8',
  competency: 5,
  category: ['Dev Ops'],
},
{
  title: 'Data Visualization',
  competency: 5,
  category: ['Data Science'],
},
{
  title: 'Web Data Retrieval',
  competency: 5,
  category: ['Data Science'],
},
{
  title: 'DICOM',
  competency: 5,
  category: ['Medical IT'],
},
{
  title: 'HL7',
  competency: 5,
  category: ['Medical IT'],
},
{
  title: 'PACS',
  competency: 5,
  category: ['Medical IT'],
},
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#cc7b94',
  '#3896e2',
  '#d75858',
  '#747fff',
  '#64cb7b',
  '#A3A300',
];

const categories = [...new Set(
  skills.reduce((acc, { category }) => acc.concat(category), []),
)].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
