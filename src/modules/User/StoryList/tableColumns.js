export default [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    sorter: {
      compare: (a, b) => a.id - b.id,
    },
  },
  {
    title: 'Summary',
    dataIndex: 'summary',
    key: 'summary',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    filters: [
      { text: 'Enhancement', value: 'enhancement' },
      { text: 'Bugfix', value: 'bugfix' },
      { text: 'Development', value: 'development' },
      { text: 'QA', value: 'qa' },
    ],
    onFilter: (value, record) => record.type.includes(value),
  },
  {
    title: 'Complexity',
    dataIndex: 'complexity',
    key: 'complexity',
    sorter: {
      compare: (a, b) => {
        const weights = { low: 0, mid: 1, high: 2 }
        return weights[a.complexity] - weights[b.complexity]
      },
    },
  },
  {
    title: 'Estimated time for completion',
    dataIndex: 'estimatedHrs',
    key: 'estimatedHrs',
  },
  {
    title: 'Cost',
    dataIndex: 'cost',
    key: 'cost',
  },
]
