import LazyScratchBlocks from './tw-lazy-scratch-blocks';

const categorySeparator = '<sep gap="36"/>';

const blockSeparator = '<sep gap="36"/>'; // At default scale, about 28px

const translate = (id, english) => {
    if (LazyScratchBlocks.isLoaded()) {
        const ScratchBlocks = LazyScratchBlocks.get();
        return ScratchBlocks.ScratchMsgs.translate(id, english);
    }
    return english;
};

/* eslint-disable no-unused-vars */
const motion = function (isInitialSetup, isStage, targetId) {
    const stageSelected = translate(
        'MOTION_STAGE_SELECTED',
        'Stage selected: no motion blocks'
    );
    return `
    
const events = function (isInitialSetup, isStage) {
    return `
    <category name="%{BKY_CATEGORY_EVENTS}" id="events" colour="#FFD500" secondaryColour="#CC9900">
        <block type="event_whenflagclicked"/>
        
const control = function (isInitialSetup, isStage) {
    return `
    <category name="%{BKY_CATEGORY_CONTROL}" id="control" colour="#FFAB19" secondaryColour="#CF8B17">
        <block type="control_wait">
            <value name="DURATION">
                <shadow type="math_positive_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
        </block>
      
        <block type="control_repeat">
            <value name="TIMES">
                <shadow type="math_whole_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
    

const sensing = function (isInitialSetup, isStage, targetId) {
    const name = translate('SENSING_ASK_TEXT', 'What\'s your name?');
    // const openDocumentation = translate('OPEN_DOCUMENTATION', 'Open Documentation');
    const helpManual = translate('HELP_MANUAL', 'Help Manual');
    return `
    <category name="%{BKY_CATEGORY_SENSING}" id="sensing" colour="#4CBFE6" secondaryColour="#2E8EB8">
   

    
        <block type="operator_constrainnumber">
            <value name="inp">
                <shadow type="math_number">
                    <field name="NUM">50</field>
                </shadow>
            </value>
            <value name="min">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="max">
                <shadow type="math_number">
                    <field name="NUM">100</field>
                </shadow>
            </value>
        </block>
        <block type="operator_lerpFunc">
            <value name="ONE">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="TWO">
                <shadow type="math_number">
                    <field name="NUM">3</field>
                </shadow>
            </value>
            <value name="AMOUNT">
                <shadow type="math_number">
                    <field name="NUM">0.5</field>
                </shadow>
            </value>
        </block>
        ${blockSeparator}
        <block type="operator_gt">
            <value name="OPERAND1">
                <shadow type="text">
                    <field name="TEXT"/>
                </shadow>
            </value>
            <value name="OPERAND2">
                <shadow type="text">
                    <field name="TEXT">50</field>
                </shadow>
            </value>
        </block>
        <block type="operator_gtorequal">
            <value name="OPERAND1">
                <shadow type="text">
                    <field name="TEXT"/>
                </shadow>
            </value>
            <value name="OPERAND2">
                <shadow type="text">
                    <field name="TEXT">50</field>
                </shadow>
            </value>
        </block>
        <block type="operator_lt">
            <value name="OPERAND1">
                <shadow type="text">
                    <field name="TEXT"/>
                </shadow>
            </value>
            <value name="OPERAND2">
                <shadow type="text">
                    <field name="TEXT">50</field>
                </shadow>
            </value>
        </block>
        <block type="operator_ltorequal">
            <value name="OPERAND1">
                <shadow type="text">
                    <field name="TEXT"/>
                </shadow>
            </value>
            <value name="OPERAND2">
                <shadow type="text">
                    <field name="TEXT">50</field>
                </shadow>
            </value>
        </block>
        <block type="operator_equals">
            <value name="OPERAND1">
                <shadow type="text">
                    <field name="TEXT"/>
                </shadow>
            </value>
            <value name="OPERAND2">
                <shadow type="text">
                    <field name="TEXT">50</field>
                </shadow>
            </value>
        </block>
        <block type="operator_notequal">
            <value name="OPERAND1">
                <shadow type="text">
                    <field name="TEXT"/>
                </shadow>
            </value>
            <value name="OPERAND2">
                <shadow type="text">
                    <field name="TEXT">50</field>
                </shadow>
            </value>
        </block>

    
            <block type="operator_indexOfTextInText">
                <value name="TEXT1">
                    <shadow type="text">
                        <field name="TEXT">world</field>
                    </shadow>
                </value>
                <value name="TEXT2">
                    <shadow type="text">
                        <field name="TEXT">Hello world!</field>
                    </shadow>
                </value>
            </block>    
    ${blockSeparator}
            <block type="operator_lastIndexOfTextInText">
                <value name="TEXT1">
                    <shadow type="text">
                        <field name="TEXT">world</field>
                    </shadow>
                </value>
                <value name="TEXT2">
                    <shadow type="text">
                        <field name="TEXT">Hello world!</field>
                    </shadow>
                </value>
            </block>
            ${blockSeparator}
            <block type="operator_letter_of">
                <value name="LETTER">
                    <shadow type="math_whole_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
                <value name="STRING">
                    <shadow type="text">
                        <field name="TEXT">${apple}</field>
                    </shadow>
                </value>
            </block>
            <block type="operator_getLettersFromIndexToIndexInText">
                <value name="INDEX1">
                    <shadow type="text">
                        <field name="NUM">Hello</field>
                    </shadow>
                </value>
              
            </block>
            <block type="operator_length">
                <value name="STRING">
                    <shadow type="text">
                        <field name="TEXT">${apple}</field>
                    </shadow>
                </value>
            </block>
            ${blockSeparator}
            <block type="operator_contains" id="operator_contains">
              <value name="STRING1">
                <shadow type="text">
                  <field name="TEXT">${apple}</field>
                </shadow>
              </value>
              <value name="STRING2">
                <shadow type="text">
                  <field name="TEXT">${letter}</field>
                </shadow>
              </value>
            </block>
            <block type="operator_textStartsOrEndsWith" id="operator_textStartsOrEndsWith">
              <value name="TEXT1">
                <shadow type="text">
                  <field name="TEXT">abcdef</field>
                </shadow>
              </value>
              <value name="TEXT2">
                <shadow type="text">
                  <field name="TEXT">abc</field>
                </shadow>
              </value>
            </block>
            ${blockSeparator}
            <block type="operator_replaceAll">
                <value name="text">
                    <shadow type="text">
                        <field name="TEXT">foo bar</field>
                    </shadow>
                </value>
                <value name="term">
                    <shadow type="text">
                        <field name="TEXT">foo</field>
                    </shadow>
                </value>
                <value name="res">
                    <shadow type="text">
                        <field name="TEXT">bar</field>
                    </shadow>
                </value>
            </block>
            <block type="operator_replaceFirst">
                <value name="text">
                    <shadow type="text">
                        <field name="TEXT">bar bar doo</field>
                    </shadow>
                </value>
                <value name="term">
                    <shadow type="text">
                        <field name="TEXT">bar</field>
                    </shadow>
                </value>
                <value name="res">
                    <shadow type="text">
                        <field name="TEXT">foo</field>
                    </shadow>
                </value>
            </block>
            <block type="operator_regexmatch">
                <value name="text">
                    <shadow type="text">
                        <field name="TEXT">foo bar</field>
                    </shadow>
                </value>
                <value name="reg">
                    <shadow type="text">
                        <field name="TEXT">foo</field>
                    </shadow>
                </value>
                <value name="regrule">
                    <shadow type="text">
                        <field name="TEXT">g</field>
                    </shadow>
                </value>
            </block>
            ${blockSeparator}
            <block type="operator_toUpperLowerCase">
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT">ello</field>
                    </shadow>
                </value>
            </block>
        `}
        ${blockSeparator}
        <block type="operator_mod">
            <value name="NUM1">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
            <value name="NUM2">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>
        <block type="operator_round">
            <value name="NUM">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>
        ${blockSeparator}
        <block type="operator_mathop">
            <value name="NUM">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>
        ${blockSeparator}
        <block type="operator_stringify">
            <value name="ONE">
                <shadow type="text">
                    <field name="TEXT">foo</field>
                </shadow>
            </value>
        </block>
        <block type="operator_boolify">
            <value name="ONE">
                <shadow type="text">
                    <field name="TEXT">true</field>
                </shadow>
            </value>
        </block>
        ${categorySeparator}
    </category>
    `;
};

const variables = function () {
    return `
    <category
        name="%{BKY_CATEGORY_VARIABLES}"
        id="variables"
        colour="#FF8C1A"
        secondaryColour="#DB6E00"
        custom="VARIABLE">
    </category>
    `;
};

const lists = function () {
    return `
    <category
        name="Lists"
        id="lists"
        colour="#FF661A"
        secondaryColour="#FF5500"
        custom="LIST">
    </category>
    `;
};

const myBlocks = function () {
    return `
    <category
        name="%{BKY_CATEGORY_MYBLOCKS}"
        id="myBlocks"
        colour="#FF6680"
        secondaryColour="#FF4D6A"
        custom="PROCEDURE">
    </category>
    `;
};

const liveTests = function () {
    return `
    <category name="Live Tests" id="liveTests" colour="#FF0000" secondaryColour="#FF0000">
        <block type="procedures_call">
            <mutation proccode="tw:debugger;" argumentids="[]" warp="false" returns="null" edited="true" optype="null"></mutation>
        </block>
        ${blockSeparator}
        <block type="looks_setVertTransform">
            <value name="PERCENT">
                <shadow type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>
        <block type="looks_setHorizTransform">
            <value name="PERCENT">
                <shadow type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>
        ${blockSeparator}
        <block type="control_fieldbutton"></block>
        <block type="operators_expandablejoininputs"></block>
        <block type="motion_mutatorCheckboxTest"></block>
        ${blockSeparator}
        <block type="data_filterlist">
            <value name="INDEX">
                <shadow type="data_filterlistindex"></shadow>
            </value>
            <value name="ITEM">
                <shadow type="data_filterlistitem"></shadow>
            </value>
        </block>
        ${blockSeparator}
        <block type="control_dualblock"></block>
    </category>
    `;
};

/* eslint-enable no-unused-vars */

const xmlOpen = '<xml style="display: none">';
const xmlClose = '</xml>';

/**
 * @param {!boolean} isInitialSetup - Whether the toolbox is for initial setup. If the mode is "initial setup",
 * blocks with localized default parameters (e.g. ask and wait) should not be loaded. (LLK/scratch-gui#5445)
 * @param {?boolean} isStage - Whether the toolbox is for a stage-type target. This is always set to true
 * when isInitialSetup is true.
 * @param {?string} targetId - The current editing target
 * @param {?Array.<object>} categoriesXML - optional array of `{id,xml}` for categories. This can include both core
 * and other extensions: core extensions will be placed in the normal Scratch order; others will go at the bottom.
 * @property {string} id - the extension / category ID.
 * @property {string} xml - the `<category>...</category>` XML for this extension / category.
 * @param {?string} costumeName - The name of the default selected costume dropdown.
 * @param {?string} backdropName - The name of the default selected backdrop dropdown.
 * @param {?string} soundName -  The name of the default selected sound dropdown.
 * @param {?boolean} isLiveTest - whether or not we should display the live tests categpory
 * @returns {string} - a ScratchBlocks-style XML document for the contents of the toolbox.
 */
const makeToolboxXML = function (isInitialSetup, isStage = true, targetId, categoriesXML = [],
    costumeName = '', backdropName = '', soundName = '', isLiveTest = false) {
    isStage = isInitialSetup || isStage;
    const gap = [categorySeparator];

    costumeName = xmlEscape(costumeName);
    backdropName = xmlEscape(backdropName);
    soundName = xmlEscape(soundName);

    categoriesXML = categoriesXML.slice();
    const moveCategory = categoryId => {
        const index = categoriesXML.findIndex(categoryInfo => categoryInfo.id === categoryId);
        if (index >= 0) {
            // remove the category from categoriesXML and return its XML
            const [categoryInfo] = categoriesXML.splice(index, 1);
            return categoryInfo.xml;
        }
        // return `undefined`
    };
    const motionXML = moveCategory('motion') || motion(isInitialSetup, isStage, targetId);
    const looksXML = moveCategory('looks') || looks(isInitialSetup, isStage, targetId, costumeName, backdropName);
    const soundXML = moveCategory('sound') || sound(isInitialSetup, isStage, targetId, soundName);
    const eventsXML = moveCategory('event') || events(isInitialSetup, isStage, targetId);
    const controlXML = moveCategory('control') || control(isInitialSetup, isStage, targetId);
    const sensingXML = moveCategory('sensing') || sensing(isInitialSetup, isStage, targetId);
    const operatorsXML = moveCategory('operators') || operators(isInitialSetup, isStage, targetId);
    const variablesXML = moveCategory('variables') || variables(isInitialSetup, isStage, targetId);
    const listsXML = moveCategory('lists') || lists(isInitialSetup, isStage, targetId);
    const myBlocksXML = moveCategory('procedures') || myBlocks(isInitialSetup, isStage, targetId);
    const liveTestsXML = moveCategory('liveTests') || liveTests(isLiveTest);

    const everything = [
        xmlOpen,
        motionXML,
        looksXML,
        soundXML,
        eventsXML,
        controlXML,
        sensingXML,
        operatorsXML,
        variablesXML,
        listsXML,
        myBlocksXML
    ];
    if (isLiveTest) everything.push(liveTestsXML);

    for (const extensionCategory of categoriesXML) {
        everything.push(extensionCategory.xml);
    }

    everything.push(xmlClose);
    return everything.join(`\n${gap}\n`);
};

export default makeToolboxXML;
