package be.prj.template.common.model.controller;

import be.prj.template.common.entity.ApiResponse;

public interface CrudController<ID, CREATE, UPDATE> {
    ApiResponse list();

    ApiResponse detail(ID id);

    ApiResponse create(CREATE payload);

    ApiResponse update(UPDATE payload);

    ApiResponse delete(ID id);
}