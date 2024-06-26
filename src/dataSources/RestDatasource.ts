/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/

export default class RESTDatasource implements IDatasource, ISerializable {
  public url: string;
  public id: string;
  public caption: string;
  public type = "REST" as const;

  constructor(id: string, url: string, caption: string) {
    this.id = id;
    this.url = url;
    this.caption = caption;
  }

  async getData(resourcePath: string): Promise<any> {
    const req = await fetch(`${this.url}${resourcePath}`);
    return await req.json();
  }

  getState(): string {
    return JSON.stringify({
      id: this.id,
      url: this.url,
      caption: this.caption,
      type: this.type,
    });
  }

  loadState(state: string) {
    const parsed = JSON.parse(state);

    this.id = parsed.id;
    this.url = parsed.url;
    this.caption = parsed.caption;
    this.type = parsed.type;
  }
}
