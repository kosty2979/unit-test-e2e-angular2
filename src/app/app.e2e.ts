describe('App', () => {

  // beforeEach(() => {
    browser.get('/');
  // });

  it('page have a title', () => {
    let subject = browser.getTitle();
    let result  = 'Sing App 3.2.0 with Angular 2.0 Final Release support by Flatlogic';
    expect(subject).toEqual(result);
  });

  it('present component', () => {
    let incoming = element(by.css('incoming-missions'))
    let live = element(by.css('live-missions')).isPresent();
    let completed = element(by.css('completed-missions')).isPresent();
    let result  = true;

    expect(incoming).toBeDefined();
    expect(live).toEqual(result);
    expect(completed).toEqual(result);
    });

  it('request incoming-missions ', () => {
    let incomingTr = element.all(by.css('incoming-missions tr'));
    expect(incomingTr.count()).toEqual(1);
    let subject = element(by.css('#mission-clear-button')).click()
      .then(()=>{
        expect(incomingTr.count()).toBeGreaterThan(1);
      });
  });

  it('add mission in the live-missions ', () => {
    let liveTr = element.all(by.css('live-missions tr'));
    expect(liveTr.count()).toEqual(1);
    let subject = element(by.id('selenium-incoming-mount-0')).click()
      .then(()=>{
        expect(liveTr.count()).toEqual(2);
        expect(element.all(by.css('incoming-missions tr')).count()).toEqual(5);
      });
  });

  it('abort mission of the live-missions ', () => {
    let liveTr = element.all(by.css('live-missions tr'));
    expect(liveTr.count()).toEqual(2);
    let subject = element(by.id('selenium-incoming-mount-0')).click()
      .then(()=>{
        expect(liveTr.count()).toEqual(3);
        expect(element.all(by.css('incoming-missions tr')).count()).toEqual(4);
      });
    subject = element(by.id('selenium-incoming-abort-0')).click()
      .then(()=>{
        expect(liveTr.count()).toEqual(2);
        expect(element.all(by.css('incoming-missions tr')).count()).toEqual(4);
      });
  });

  it('move mission in the completed-missions ', () => {
    let liveTr = element.all(by.css('live-missions tr'));
    let completedTr = element.all(by.css('completed-missions tr'));
    expect(liveTr.count()).toEqual(2);
    expect(completedTr.count()).toEqual(1);
    let subject = element(by.id('selenium-incoming-close-0')).click()
      .then(()=>{
        expect(liveTr.count()).toEqual(1);
        expect(completedTr.count()).toEqual(2);
      });
   
  });

 
});
