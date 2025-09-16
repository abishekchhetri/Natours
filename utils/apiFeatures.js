class APIfeature {
  constructor(query, reqQuery) {
    this.query = query;
    this.reqQuery = reqQuery;
  }

  filter() {
    // eslint-disable-next-line node/no-unsupported-features/es-syntax
    let queryString = { ...this.reqQuery };
    ['page', 'limit', 'field', 'sort'].forEach((val) => {
      delete queryString[val];
    });
    //advanced filtering
    queryString = JSON.stringify(queryString);
    queryString = queryString.replace(
      /\b(gt|lt|gte|lte)\b/g,
      (match) => `$${match}`,
    );
    queryString = JSON.parse(queryString);
    this.query = this.query.find(queryString);
    //we returned this since we want to chain stuffs
    return this;
  }

  sort() {
    if (this.reqQuery.sort) {
      const sortFields = this.reqQuery.sort.replace(',', ' ');
      this.query = this.query.sort(sortFields);
    } else {
      this.query = this.query.sort('createdAt');
    }
    return this;
  }

  fieldLimit() {
    if (this.reqQuery.field) {
      const limitFields = this.reqQuery.field.replaceAll(',', ' ');
      this.query = this.query.select(limitFields);
    } else {
      this.query = this.query.select('-__v');
    }
    return this;
  }

  paginate() {
    const page = +this.reqQuery.page || 1;
    const limit = +this.reqQuery.limit || 100;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

module.exports = APIfeature;
