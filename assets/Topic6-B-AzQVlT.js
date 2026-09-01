import{b as o,j as e,bg as i}from"./vendor-react-core-Doz9nIC6.js";import{P as x}from"./PythonFileLoader-hCi5osN-.js";import{P as k}from"./PlainTextPrint-C08xhKA4.js";import{F as b}from"./FAQTemplate-BHhlgA96.js";import{T as w}from"./TeacherSukantaHui-CEPuAfsb.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const y=`"""\r
# Module: 004_003_python-testing\r
# Topic 6: Mocking external dependencies with unittest.mock (patch, Mock, MagicMock)\r
# File: basic_mock_and_magicmock.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating Mock vs MagicMock, return_value, side_effect, and invocation assertions.\r
"""\r
\r
from unittest.mock import Mock, MagicMock, call\r
\r
def process_student_scholarship(calculator_service, student_id: str, marks: float) -> float:\r
    """Processes student scholarship using external calculator service."""\r
    if marks < 80.0:\r
        return 0.0\r
    return calculator_service.compute_merit_grant(student_id, marks)\r
\r
def notify_student_roster(notifier_service, student_names: list[str]):\r
    """Sends SMS alerts using notifier service."""\r
    for name in student_names:\r
        notifier_service.send_alert(f"Welcome {name} to Barrackpore Campus!")\r
\r
# ------------------------------------------------------------------------------\r
# TESTS\r
# ------------------------------------------------------------------------------\r
def test_mock_return_value_and_assertion():\r
    print("   [...] Testing Mock return_value and assert_called_once_with...")\r
    \r
    # 1. Create Mock object\r
    mock_calc = Mock()\r
    mock_calc.compute_merit_grant.return_value = 5000.0\r
\r
    # 2. Invoke domain logic\r
    grant = process_student_scholarship(mock_calc, "STU_BP_01", marks=95.0)\r
\r
    # 3. Assert outputs and invocation contract\r
    assert grant == 5000.0\r
    mock_calc.compute_merit_grant.assert_called_once_with("STU_BP_01", 95.0)\r
    print("   [PASS] test_mock_return_value_and_assertion (Grant Rs. 5000 verified)")\r
\r
def test_mock_side_effect_exceptions():\r
    print("   [...] Testing Mock side_effect raising network exceptions...")\r
    \r
    mock_calc = Mock()\r
    mock_calc.compute_merit_grant.side_effect = TimeoutError("External Banking API timed out")\r
\r
    try:\r
        process_student_scholarship(mock_calc, "STU_CC_02", marks=92.0)\r
        assert False, "Expected TimeoutError"\r
    except TimeoutError as e:\r
        assert "External Banking API timed out" in str(e)\r
        print("   [PASS] test_mock_side_effect_exceptions (TimeoutError intercepted cleanly)")\r
\r
def test_magicmock_dunder_protocols():\r
    print("   [...] Testing MagicMock context manager and len dunder protocols...")\r
    \r
    # MagicMock natively supports __enter__, __exit__, __len__, __iter__\r
    mock_session = MagicMock()\r
    mock_session.__enter__.return_value = "ACTIVE_DB_CONNECTION"\r
    mock_session.__len__.return_value = 42\r
\r
    with mock_session as conn:\r
        assert conn == "ACTIVE_DB_CONNECTION"\r
        assert len(mock_session) == 42\r
    \r
    mock_session.__enter__.assert_called_once()\r
    mock_session.__exit__.assert_called_once()\r
    print("   [PASS] test_magicmock_dunder_protocols (Dunder protocols verified)")\r
\r
def test_multiple_calls_inspection():\r
    print("   [...] Testing call_args_list across multi-student notification...")\r
    \r
    mock_notifier = Mock()\r
    students = ["Mamata", "Mahima", "Abhronila"]\r
    notify_student_roster(mock_notifier, students)\r
\r
    assert mock_notifier.send_alert.call_count == 3\r
    expected_calls = [\r
        call("Welcome Mamata to Barrackpore Campus!"),\r
        call("Welcome Mahima to Barrackpore Campus!"),\r
        call("Welcome Abhronila to Barrackpore Campus!"),\r
    ]\r
    mock_notifier.send_alert.assert_has_calls(expected_calls)\r
    print("   [PASS] test_multiple_calls_inspection (3 calls verified)")\r
\r
def main():\r
    print("=" * 75)\r
    print("[UNITTEST.MOCK] Mock, MagicMock, return_value, side_effect & Assertions")\r
    print("=" * 75)\r
\r
    test_mock_return_value_and_assertion()\r
    test_mock_side_effect_exceptions()\r
    test_magicmock_dunder_protocols()\r
    test_multiple_calls_inspection()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] unittest.mock allows substituting external slow/flaky services")\r
    print("           with controllable test doubles and verifying exact call signatures.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,j=`"""\r
# Module: 004_003_python-testing\r
# Topic 6: Mocking external dependencies with unittest.mock (patch, Mock, MagicMock)\r
# File: patch_decorator_and_context_manager.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating @patch decorator and context managers adhering to\r
#              the golden rule: "Patch where it is used, not where defined".\r
"""\r
\r
from unittest.mock import patch, MagicMock\r
\r
# Simulated external service module\r
class ExternalBankingGateway:\r
    @staticmethod\r
    def transfer_tuition(student_id: str, amount: float) -> str:\r
        # In real life: makes live network HTTP POST call to bank!\r
        return "LIVE_TXN_SUCCESS"\r
\r
# Domain Service under test (Depends on ExternalBankingGateway)\r
def process_student_enrollment_fee(student_id: str, amount: float) -> dict:\r
    txn_id = ExternalBankingGateway.transfer_tuition(student_id, amount)\r
    return {\r
        "student_id": student_id,\r
        "amount": amount,\r
        "txn_id": txn_id,\r
        "status": "ENROLLED"\r
    }\r
\r
# ------------------------------------------------------------------------------\r
# TESTS USING @patch DECORATOR AND with patch() CONTEXT MANAGER\r
# ------------------------------------------------------------------------------\r
\r
# 1. Using @patch as a Decorator\r
@patch.object(ExternalBankingGateway, "transfer_tuition")\r
def test_enrollment_with_patch_decorator(mock_transfer):\r
    print("   [...] Testing @patch decorator on external banking gateway...")\r
    \r
    # Configure mock return value\r
    mock_transfer.return_value = "MOCK_TXN_BP_9988"\r
\r
    result = process_student_enrollment_fee("STU_BP_01", 12000.0)\r
\r
    assert result["status"] == "ENROLLED"\r
    assert result["txn_id"] == "MOCK_TXN_BP_9988"\r
    mock_transfer.assert_called_once_with("STU_BP_01", 12000.0)\r
    print("   [PASS] test_enrollment_with_patch_decorator (Mocked txn verified)")\r
\r
# 2. Using patch as a Context Manager\r
def test_enrollment_with_patch_context_manager():\r
    print("   [...] Testing with patch() context manager...")\r
    \r
    with patch.object(ExternalBankingGateway, "transfer_tuition") as mock_transfer:\r
        mock_transfer.return_value = "MOCK_TXN_CC_7766"\r
\r
        result = process_student_enrollment_fee("STU_CC_02", 15000.0)\r
        assert result["txn_id"] == "MOCK_TXN_CC_7766"\r
        mock_transfer.assert_called_once_with("STU_CC_02", 15000.0)\r
\r
    # Outside the 'with' block, the real method is automatically restored!\r
    print("   [PASS] test_enrollment_with_patch_context_manager (Scope isolation verified)")\r
\r
def main():\r
    print("=" * 75)\r
    print("[UNITTEST.MOCK] @patch Decorators & Context Managers")\r
    print("=" * 75)\r
\r
    test_enrollment_with_patch_decorator()\r
    test_enrollment_with_patch_context_manager()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] patch temporarily replaces an object during test execution and")\r
    print("           guarantees complete restoration when the test finishes.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,v=`"""\r
# Module: 004_003_python-testing\r
# Topic 6: Mocking external dependencies with unittest.mock (patch, Mock, MagicMock)\r
# File: mocking_network_and_database_calls.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating mocking HTTP network calls (requests.get / post)\r
#              and external SMS webhook endpoints.\r
"""\r
\r
from unittest.mock import Mock, patch\r
import json\r
\r
# Simulated external API client\r
class RegionalNotificationClient:\r
    def __init__(self, api_url: str):\r
        self.api_url = api_url\r
\r
    def dispatch_sms(self, phone: str, message: str) -> dict:\r
        # In production: requests.post(self.api_url, json={"phone": phone, "msg": message})\r
        # For demonstration: calls network\r
        raise ConnectionError("Cannot reach live SMS gateway in unit tests!")\r
\r
class InstitutionalAdmissionCoordinator:\r
    def __init__(self, notifier: RegionalNotificationClient):\r
        self.notifier = notifier\r
\r
    def onboard_student(self, sid: str, name: str, phone: str, campus: str) -> dict:\r
        msg = f"Admission confirmed for {name} at {campus} Campus."\r
        response = self.notifier.dispatch_sms(phone, msg)\r
        return {\r
            "sid": sid,\r
            "name": name,\r
            "campus": campus,\r
            "sms_status": response.get("status", "FAILED")\r
        }\r
\r
# ------------------------------------------------------------------------------\r
# TESTS WITH NETWORK MOCKING\r
# ------------------------------------------------------------------------------\r
def test_student_onboarding_sms_dispatch():\r
    print("   [...] Testing student onboarding with mocked SMS network response...")\r
    \r
    # Create mock notifier\r
    mock_notifier = Mock(spec=RegionalNotificationClient)\r
    mock_notifier.dispatch_sms.return_value = {\r
        "status": "DELIVERED",\r
        "message_id": "MSG_SMS_8877",\r
        "phone": "9830001111"\r
    }\r
\r
    coordinator = InstitutionalAdmissionCoordinator(mock_notifier)\r
    result = coordinator.onboard_student("STU_BP_01", "Mamata", "9830001111", "Barrackpore")\r
\r
    # Assert business outcomes and mock invocations\r
    assert result["sms_status"] == "DELIVERED"\r
    assert result["name"] == "Mamata"\r
    \r
    mock_notifier.dispatch_sms.assert_called_once_with(\r
        "9830001111",\r
        "Admission confirmed for Mamata at Barrackpore Campus."\r
    )\r
    print("   [PASS] test_student_onboarding_sms_dispatch (SMS delivered without network calls)")\r
\r
def test_student_onboarding_network_failure_handling():\r
    print("   [...] Testing SMS network timeout handling...")\r
    \r
    mock_notifier = Mock(spec=RegionalNotificationClient)\r
    mock_notifier.dispatch_sms.side_effect = TimeoutError("SMS Gateway Connection Timed Out")\r
\r
    coordinator = InstitutionalAdmissionCoordinator(mock_notifier)\r
\r
    try:\r
        coordinator.onboard_student("STU_CC_02", "Mahima", "9830002222", "Kolkata")\r
        assert False, "Expected TimeoutError"\r
    except TimeoutError as e:\r
        assert "SMS Gateway Connection Timed Out" in str(e)\r
        print("   [PASS] test_student_onboarding_network_failure_handling (Timeout handled)")\r
\r
def main():\r
    print("=" * 75)\r
    print("[UNITTEST.MOCK] Mocking External Network & Webhook Dispatches")\r
    print("=" * 75)\r
\r
    test_student_onboarding_sms_dispatch()\r
    test_student_onboarding_network_failure_handling()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Mocking network boundaries enables fast, deterministic tests that")\r
    print("           run reliably in offline CI/CD pipelines without sending real SMS.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,N=`"""\r
# Module: 004_003_python-testing\r
# Topic 6: Mocking external dependencies with unittest.mock (patch, Mock, MagicMock)\r
# File: institutional_payment_gateway_mock_suite.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Production-grade multi-campus institutional payment orchestration suite\r
#              mocking external banking gateways, SMS dispatchers, and audit loggers.\r
"""\r
\r
from unittest.mock import Mock, patch, call\r
\r
class PaymentGatewayClient:\r
    def charge_card(self, sid: str, amount: float, token: str) -> dict:\r
        raise NotImplementedError("Live banking API")\r
\r
class AuditLogService:\r
    def log_transaction(self, sid: str, status: str, txn_ref: str):\r
        raise NotImplementedError("Remote logging database")\r
\r
class InstitutionalTuitionProcessor:\r
    def __init__(self, gateway: PaymentGatewayClient, auditor: AuditLogService):\r
        self.gateway = gateway\r
        self.auditor = auditor\r
\r
    def pay_admission_fee(self, sid: str, name: str, campus: str, amount: float, token: str) -> dict:\r
        if amount <= 0:\r
            raise ValueError("Payment amount must be positive.")\r
        \r
        # 1. External Gateway Call\r
        gw_response = self.gateway.charge_card(sid, amount, token)\r
        \r
        if gw_response.get("status") != "SUCCESS":\r
            self.auditor.log_transaction(sid, "FAILED", gw_response.get("ref", "NO_REF"))\r
            raise RuntimeError(f"Payment failed: {gw_response.get('error', 'Unknown Error')}")\r
            \r
        txn_ref = gw_response["ref"]\r
        \r
        # 2. External Audit Call\r
        self.auditor.log_transaction(sid, "SETTLED", txn_ref)\r
        \r
        return {\r
            "sid": sid,\r
            "name": name,\r
            "campus": campus,\r
            "amount": amount,\r
            "status": "PAID",\r
            "txn_ref": txn_ref\r
        }\r
\r
# ------------------------------------------------------------------------------\r
# TEST SUITE\r
# ------------------------------------------------------------------------------\r
def test_successful_tuition_payment_workflow():\r
    print("   [...] Testing successful payment workflow with mock gateway & auditor...")\r
    \r
    mock_gw = Mock(spec=PaymentGatewayClient)\r
    mock_auditor = Mock(spec=AuditLogService)\r
    \r
    mock_gw.charge_card.return_value = {\r
        "status": "SUCCESS",\r
        "ref": "BANK_TXN_BP_1001",\r
        "auth_code": "AUTH_9988"\r
    }\r
\r
    processor = InstitutionalTuitionProcessor(mock_gw, mock_auditor)\r
    res = processor.pay_admission_fee("STU_BP_01", "Mamata", "Barrackpore", 15000.0, "TOK_CARD_777")\r
\r
    assert res["status"] == "PAID"\r
    assert res["txn_ref"] == "BANK_TXN_BP_1001"\r
    \r
    # Assert Gateway call contract\r
    mock_gw.charge_card.assert_called_once_with("STU_BP_01", 15000.0, "TOK_CARD_777")\r
    \r
    # Assert Auditor call contract\r
    mock_auditor.log_transaction.assert_called_once_with("STU_BP_01", "SETTLED", "BANK_TXN_BP_1001")\r
    print("   [PASS] test_successful_tuition_payment_workflow (Mamata fee processed)")\r
\r
def test_declined_tuition_payment_workflow():\r
    print("   [...] Testing declined payment workflow with mock gateway failure...")\r
    \r
    mock_gw = Mock(spec=PaymentGatewayClient)\r
    mock_auditor = Mock(spec=AuditLogService)\r
    \r
    mock_gw.charge_card.return_value = {\r
        "status": "DECLINED",\r
        "ref": "BANK_FAIL_CC_2002",\r
        "error": "Card limit exceeded"\r
    }\r
\r
    processor = InstitutionalTuitionProcessor(mock_gw, mock_auditor)\r
\r
    try:\r
        processor.pay_admission_fee("STU_CC_02", "Mahima", "Kolkata", 25000.0, "TOK_CARD_999")\r
        assert False, "Expected RuntimeError on declined payment"\r
    except RuntimeError as e:\r
        assert "Card limit exceeded" in str(e)\r
        \r
        # Verify auditor logged failure\r
        mock_auditor.log_transaction.assert_called_once_with("STU_CC_02", "FAILED", "BANK_FAIL_CC_2002")\r
        print("   [PASS] test_declined_tuition_payment_workflow (Mahima failure audited)")\r
\r
def main():\r
    print("=" * 80)\r
    print("[CASE STUDY] Institutional Payment Gateway & Audit Mock Suite")\r
    print("=" * 80)\r
\r
    test_successful_tuition_payment_workflow()\r
    test_declined_tuition_payment_workflow()\r
\r
    print("=" * 80)\r
    print("[TAKEAWAY] Mocking multiple interacting dependencies allows end-to-end testing")\r
    print("           of complex transactional workflows without real financial transactions.")\r
    print("=" * 80)\r
\r
if __name__ == "__main__":\r
    main()\r
`,T=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 4: PRO LEVEL • MODULE 004_003: PYTHON TESTING\r
                     TOPIC 6: MOCKING EXTERNAL DEPENDENCIES WITH MOCK\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. MOCK VS MAGICMOCK & RETURN_VALUE VS SIDE_EFFECT\r
--------------------------------------------------------------------------------\r
  from unittest.mock import Mock, MagicMock\r
\r
  # MagicMock implements Python magic dunder methods (__len__, __iter__, etc.)\r
  mock_service = MagicMock()\r
  mock_service.calculate_discount.return_value = 2500.0\r
  mock_service.send_sms.side_effect = [True, ConnectionError("Network timeout")]\r
\r
  # Assertion verification\r
  mock_service.calculate_discount(10000.0)\r
  mock_service.calculate_discount.assert_called_once_with(10000.0)\r
\r
--------------------------------------------------------------------------------\r
2. THE GOLDEN RULE OF PATCHING: WHERE TO PATCH\r
--------------------------------------------------------------------------------\r
  # GOLDEN RULE: Patch where an object is LOOKED UP / USED, NOT where defined!\r
  # If 'billing.py' imports 'requests', patch 'billing.requests.post', NOT 'requests.post'!\r
\r
  from unittest.mock import patch\r
\r
  @patch("institutional_service.requests.post")\r
  def test_payment_webhook(mock_post):\r
      mock_post.return_value.status_code = 200\r
      mock_post.return_value.json.return_value = {"status": "CAPTURED"}\r
\r
      result = process_payment("STU_1", 5000.0)\r
      assert result == "CAPTURED"\r
      mock_post.assert_called_once()\r
\r
--------------------------------------------------------------------------------\r
3. PREVENTING MOCK DRIFT WITH AUTOSPEC\r
--------------------------------------------------------------------------------\r
  # autospec=True ensures the mock mirrors real function signatures strictly\r
  @patch("institutional_service.send_sms", autospec=True)\r
  def test_sms(mock_sms):\r
      mock_sms("9830000000", "Welcome Mamata") # Valid\r
      # mock_sms(invalid_arg=123) # FAILS immediately due to signature mismatch!\r
\r
================================================================================\r
       END OF STUDY NOTE • TOPIC 6: MOCKING EXTERNAL DEPENDENCIES\r
================================================================================\r
`,S=[{question:"What is the primary purpose of mocking in unit tests?",shortAnswer:"To isolate the unit of code under test from external, non-deterministic, slow, or destructive dependencies (such as external HTTP APIs, payment gateways, live databases, or SMS gateways) by substituting them with controllable test doubles.",explanation:"Test isolation and external dependency replacement.",hint:"Replaces slow, flaky, or external services with controllable fake objects.",level:"basic",codeExample:"mock_api = Mock(); mock_api.get_balance.return_value = 5000.0"},{question:"What is the difference between 'Mock' and 'MagicMock' in Python's standard library?",shortAnswer:"'MagicMock' is a subclass of 'Mock' that provides default implementations for Python magic/dunder methods (such as '__len__', '__iter__', '__getitem__', '__enter__', and '__exit__'), making it suitable for mocking context managers, iterables, and container objects.",explanation:"Dunder magic method support in MagicMock.",hint:"MagicMock supports dunder methods like __iter__, __len__, and context managers (__enter__/__exit__).",level:"basic",codeExample:"m = MagicMock(); len(m); [x for x in m]; with m: pass"},{question:"What is the difference between 'return_value' and 'side_effect' on a Mock object?",shortAnswer:"'return_value' returns the exact same fixed value every time the mock is called; 'side_effect' can raise an exception, execute a custom callable function, or return successive values from an iterable upon each call.",explanation:"Static return values vs dynamic execution and exception simulation.",hint:"return_value returns static data; side_effect can raise errors, call functions, or iterate.",level:"basic",codeExample:`mock.return_value = 100
mock.side_effect = [1, 2, ConnectionError('Timeout')]`},{question:"What is the 'Where to Patch' golden rule in Python's unittest.mock?",shortAnswer:"Always patch where an object is LOOKED UP / IMPORTED (in the module under test), NOT where the object was originally defined (e.g. if 'billing.py' has 'import requests', patch 'billing.requests.post', not 'requests.post').",explanation:"The single most common mocking mistake in Python engineering.",hint:"Patch where the function is imported and used, not where it is defined.",level:"moderate",codeExample:"# In billing.py: import requests → Patch: @patch('billing.requests.post')"},{question:"How do you verify that a mock function was called exactly once with specific arguments?",shortAnswer:"Using 'mock_fn.assert_called_once_with(arg1, arg2, kwarg=val)', which verifies both the call count and the exact arguments passed to the mock.",explanation:"Strict invocation contract assertion in unittest.mock.",hint:"Use mock_fn.assert_called_once_with(*args, **kwargs).",level:"basic",codeExample:"mock_mailer.assert_called_once_with('mamata@email.com', 'Welcome')"},{question:"How does 'patch' work as a decorator vs as a context manager?",shortAnswer:`As a decorator ('@patch("module.func")'), it passes the created mock object as an argument to the test function; as a context manager ('with patch("module.func") as mock_f:'), it restricts mocking to the enclosed block.`,explanation:"Decorator vs context manager scopes for patch.",hint:"@patch passes the mock as a parameter; with patch(...) as mock restricts scope.",level:"basic",codeExample:`@patch('app.api')
def test_fn(mock_api): ... 
# vs: with patch('app.api') as m: ...`},{question:"What is the danger of mocking without 'autospec=True' (Mock Drift)?",shortAnswer:"Standard mocks accept any method name and any number of arguments without complaining, allowing tests to pass even if the real production function's signature or method names have changed or been deleted.",explanation:"Mock drift and false positive tests caused by unconstrained mocks.",hint:"Unconstrained mocks allow calling nonexistent methods or wrong arguments without errors.",level:"moderate",codeExample:"@patch('service.send_email', autospec=True) # Enforces real signature"},{question:"How do you mock Python's built-in 'open()' function for file reading/writing tests?",shortAnswer:`Using 'unittest.mock.mock_open(read_data="sample file content")' paired with '@patch("builtins.open", mock_open(...))'.`,explanation:"Standard library helper for mocking file I/O streams.",hint:"@patch('builtins.open', mock_open(read_data='content'))",level:"moderate",codeExample:`with patch('builtins.open', mock_open(read_data='{"status": "OK"}')):`},{question:"How do you inspect all calls made to a mock over its lifecycle?",shortAnswer:"By inspecting 'mock_fn.call_args_list' (a list of 'call(args, kwargs)' objects) or checking 'mock_fn.call_count'.",explanation:"Call history and multi-invocation inspection.",hint:"mock_fn.call_args_list contains the history of all calls.",level:"moderate",codeExample:`assert mock_fn.call_count == 3
assert mock_fn.call_args_list[0] == call('first_arg')`},{question:"What is 'unittest.mock.PropertyMock' used for?",shortAnswer:"'PropertyMock' is specialized for mocking '@property' getter/setter attributes on classes that are accessed without parentheses (e.g. 'obj.status').",explanation:"Class property attribute mocking.",hint:"Used to mock properties accessed without calling parentheses (e.g. obj.balance).",level:"moderate",codeExample:`with patch.object(Student, 'balance', new_callable=PropertyMock) as mock_bal:
    mock_bal.return_value = 5000.0`},{question:"How do you simulate a network timeout or connection error using a mock?",shortAnswer:`Assign the exception class or instance to the mock's 'side_effect' attribute (e.g. 'mock_post.side_effect = requests.exceptions.Timeout("Gateway down")').`,explanation:"Network failure simulation with side_effect.",hint:"mock.side_effect = requests.exceptions.Timeout('Connection timed out')",level:"basic",codeExample:"mock_gateway.side_effect = TimeoutError('Bank API unreachable')"},{question:"What is the difference between 'patch.object(target, 'attribute')' and 'patch('target.module.attribute')'?",shortAnswer:"'patch.object' takes the actual Python class/module object as its first argument and the attribute name as a string; 'patch' takes a single complete import path string.",explanation:"Direct object attribute patching vs string module path patching.",hint:"patch.object takes the actual imported class/module object directly.",level:"moderate",codeExample:"patch.object(MyService, 'send_sms') vs patch('my_pkg.MyService.send_sms')"},{question:"How do you mock an asynchronous function in Python 3.8+?",shortAnswer:"Using 'unittest.mock.AsyncMock', which natively returns an awaitable coroutine and provides assertions like 'assert_awaited_once_with()'.",explanation:"Native asyncio coroutine mocking with AsyncMock.",hint:"Use unittest.mock.AsyncMock for async def functions.",level:"moderate",codeExample:`mock_async_fetch = AsyncMock(return_value={'status': 200})
await mock_async_fetch()`},{question:"What does 'mock_fn.assert_not_called()' verify?",shortAnswer:"It asserts that the mock was NEVER invoked during the test execution (useful for verifying that caching prevented an API call or error conditions aborted early).",explanation:"Zero invocation contract verification.",hint:"Verifies that the mock was never called during the test.",level:"basic",codeExample:"cache_hit_func(); mock_database.assert_not_called()"},{question:"Can multiple '@patch' decorators be stacked on a single test function?",shortAnswer:"Yes, but remember that stacked patches are passed as arguments to the test function in BOTTOM-TO-TOP (reverse) order.",explanation:"Stacked patch argument ordering rule.",hint:"Bottom-most patch is passed as the first argument, top-most patch is passed last.",level:"complex",codeExample:`@patch('module.email') # Passed 2nd
@patch('module.db')    # Passed 1st
def test_fn(mock_db, mock_email): ... `},{question:"What is a 'Spy' in the test doubles taxonomy and how is it created with unittest.mock?",shortAnswer:"A spy wraps a real object, delegating calls to the real implementation while secretly recording all invocation arguments and call counts; created with 'Mock(wraps=real_object)'.",explanation:"Delegating mock wrapper for behavior verification.",hint:"Mock(wraps=real_instance) executes real code while recording calls.",level:"complex",codeExample:"real_calc = Calculator(); spy = Mock(wraps=real_calc)"},{question:"Why should you avoid over-mocking (mocking internal private functions)?",shortAnswer:"Over-mocking ties unit tests to implementation details rather than public contracts, creating brittle tests that break during internal refactoring even when overall behavior is correct.",explanation:"Over-mocking anti-pattern and refactoring fragility.",hint:"Mock only external boundaries (APIs, DBs, I/O), not internal private helpers.",level:"moderate",codeExample:"# Mock external HTTP APIs, not your internal private helper functions"},{question:"What happens if a mock method name is misspelled when 'spec=True' is NOT set?",shortAnswer:"The mock dynamically creates a brand-new Mock attribute for the misspelled name without error, causing assertions like 'assert mock.misspelled_method.called' to pass or fail unexpectedly.",explanation:"Silent attribute creation hazards on un-specced mocks.",hint:"Without spec, mocks dynamically create attributes on the fly for any typo.",level:"basic",codeExample:"mock.asert_called_once() # Typo in 'assert' creates a new mock silently!"},{question:"What does 'mock_fn.reset_mock()' do?",shortAnswer:"It clears all captured call history ('call_count', 'call_args', 'call_args_list') while preserving configured 'return_value' and 'side_effect' settings.",explanation:"Call history resetting between test steps.",hint:"Resets call counts and argument histories without wiping configured return values.",level:"basic",codeExample:"mock.reset_mock() # Clears call history"},{question:"What is the ultimate golden rule of mocking in Python?",shortAnswer:"Mock at the architectural boundaries (HTTP, DB, Filesystem, Clock), patch where objects are used, enforce signatures with 'autospec=True', and assert both return values and invocation arguments.",explanation:"The complete enterprise mocking best practice standard.",hint:"Boundary mocking + where-used patching + autospec=True.",level:"basic",codeExample:"# Enterprise Mocking Standard"}];function R(){const h=o.useRef([]),[r,u]=o.useState("mockVsMagic"),[s,p]=o.useState("RETURN_VALUE"),[a,f]=o.useState(!0);let c="Returns fixed simulated JSON payload",l="mock_gw.charge.assert_called_once_with('STU_BP_01', 15000.0)",d="Simulating successful 200 OK bank transaction";s==="RETURN_VALUE"?(c="Returns fixed simulated JSON payload",l="mock_gw.charge.assert_called_once_with('STU_BP_01', 15000.0)",d="Simulating successful 200 OK bank transaction"):s==="SIDE_EFFECT_ERROR"?(c="Raises TimeoutError / ConnectionError on call",l="with pytest.raises(TimeoutError): process_tuition(...)",d="Testing system resilience against banking gateway downtime"):s==="ITERABLE_SEQUENCE"&&(c="Returns [Fail_1, Fail_2, Success_3] on successive calls",l="assert mock_gw.charge.call_count == 3",d="Testing automatic retry loop logic with exponential backoff");const g=`# unittest.mock Test Suite
# Mock Mode: ${s} | autospec: ${a}

from unittest.mock import Mock, patch
import pytest

# GOLDEN RULE: Patch where an object is USED, NOT where defined!
@patch("institutional_billing.PaymentGatewayClient"${a?", autospec=True":""})
def test_tuition_payment_mock(mock_gateway_class):
    mock_gw = mock_gateway_class.return_value
${s==="RETURN_VALUE"?`    # Configure static simulated return value
    mock_gw.charge.return_value = {
        "status": "SUCCESS",
        "txn_id": "BANK_TXN_BP_8899"
    }

    result = process_tuition("STU_BP_01", 15000.0)
    assert result["txn_id"] == "BANK_TXN_BP_8899"
    mock_gw.charge.assert_called_once_with("STU_BP_01", 15000.0)`:s==="SIDE_EFFECT_ERROR"?`    # Simulate external network outage with side_effect
    mock_gw.charge.side_effect = TimeoutError("Bank Gateway Down")

    with pytest.raises(TimeoutError, match=r"Bank Gateway Down"):
        process_tuition("STU_BP_01", 15000.0)`:`    # Simulate retry sequence with side_effect iterable
    mock_gw.charge.side_effect = [
        TimeoutError("Retry 1"),
        TimeoutError("Retry 2"),
        {"status": "SUCCESS", "txn_id": "RETRY_SUCCESS"}
    ]

    result = process_tuition_with_retry("STU_BP_01", 15000.0)
    assert result["txn_id"] == "RETRY_SUCCESS"
    assert mock_gw.charge.call_count == 3`}`;o.useEffect(()=>{const t=new IntersectionObserver(m=>{m.forEach(_=>{_.isIntersecting&&_.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return h.current.forEach(m=>{m&&t.observe(m)}),()=>t.disconnect()},[]);const n=t=>{t&&!h.current.includes(t)&&h.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
        .section-hidden {
          transform: translateY(18px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .section-visible {
          transform: translateY(0);
        }
        @keyframes pulseGlowTeal {
          0%, 100% { filter: drop-shadow(0 0 4px rgba(20, 184, 166, 0.4)); }
          50% { filter: drop-shadow(0 0 10px rgba(20, 184, 166, 0.8)); }
        }
        .animate-glow-teal {
          animation: pulseGlowTeal 3s infinite ease-in-out;
        }
      `}),e.jsxs("header",{ref:n,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 4 • Module 004_003"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 6"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Automated Testing, PyTest & Quality Assurance"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Mocking External Dependencies: ",e.jsx("span",{className:"text-teal-400",children:"unittest.mock"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master Python's built-in ",e.jsx("code",{className:"text-teal-300 font-mono",children:"unittest.mock"})," framework: isolating unit tests from external HTTP APIs, payment gateways, and databases using ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"Mock"})," and ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"MagicMock"}),", controlling behavior with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"return_value"})," and ",e.jsx("code",{className:"text-purple-300 font-mono",children:"side_effect"}),", mastering the golden rule of ",e.jsx("code",{className:"text-amber-300 font-mono",children:"patch()"}),' ("patch where it is used, not defined"), and preventing mock drift with ',e.jsx("code",{className:"text-teal-300 font-mono",children:"autospec=True"}),"."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🎭 Mock vs MagicMock Dunders"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🎯 Where-to-Patch Golden Rule"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"💥 side_effect Exception Simulation"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ autospec=True Drift Guard"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏛️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Test Double & Mocking Architecture"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["Unit tests must run in sub-milliseconds without depending on external web APIs, database connections, or sending live SMS alerts to student phones. Python's ",e.jsx("code",{className:"text-teal-300 font-mono",children:"unittest.mock"})," provides a complete suite of test doubles to simulate external boundaries:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ Mock vs MagicMock"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"MagicMock"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:[e.jsx("code",{className:"text-teal-300",children:"MagicMock"})," adds magic dunder methods (",e.jsx("code",{className:"text-teal-300",children:"__len__"}),", ",e.jsx("code",{className:"text-teal-300",children:"__iter__"}),", ",e.jsx("code",{className:"text-teal-300",children:"__enter__"}),"), supporting context managers and iterables."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ Return vs side_effect"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"side_effect=Error"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:[e.jsx("code",{className:"text-cyan-300",children:"return_value"})," returns static data; ",e.jsx("code",{className:"text-cyan-300",children:"side_effect"})," raises exceptions or yields sequences for retry testing."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ Where-to-Patch"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"@patch('pkg.used')"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Patch where an object is ",e.jsx("strong",{children:"imported/used"})," in the module under test, NOT where the class was originally defined."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/40 border border-amber-800/60 shadow-lg",children:[e.jsx("div",{className:"text-amber-400 font-bold text-sm mb-1",children:"4️⃣ Invocation Assertions"}),e.jsx("code",{className:"text-xs font-mono text-amber-300 block mb-1",children:"assert_called_once()"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Verify invocation contracts: ",e.jsx("code",{className:"text-amber-300",children:"assert_called_once_with()"}),", ",e.jsx("code",{className:"text-amber-300",children:"call_args_list"}),", and ",e.jsx("code",{className:"text-amber-300",children:"assert_not_called()"}),"."]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Where to Patch Rule Explained"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["If ",e.jsx("code",{className:"text-purple-300 font-mono",children:"admission_service.py"})," contains ",e.jsx("code",{className:"text-purple-300 font-mono",children:"import requests"}),", patching ",e.jsx("code",{className:"text-rose-400 font-mono",children:'@patch("requests.get")'})," fails because the module has already bound its own reference! You MUST patch ",e.jsx("code",{className:"text-emerald-400 font-bold",children:'@patch("admission_service.requests.get")'}),"."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Mock Protocols, Patching Targets & Gateway Doubles"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>u("mockVsMagic"),className:i("px-3 py-1.5 rounded-lg transition-all",r==="mockVsMagic"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Mock vs MagicMock"}),e.jsx("button",{onClick:()=>u("whereToPatch"),className:i("px-3 py-1.5 rounded-lg transition-all",r==="whereToPatch"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"The Where to Patch Rule"}),e.jsx("button",{onClick:()=>u("gatewayPipeline"),className:i("px-3 py-1.5 rounded-lg transition-all",r==="gatewayPipeline"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Gateway Mocking Pipeline"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining dunder protocol support, namespace lookup resolution during patching, and transactional banking doubles:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:r==="mockVsMagic"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"TEST DOUBLE ARCHITECTURE: STANDARD MOCK VS MAGICMOCK"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#0f172a",stroke:"#14b8a6"}),e.jsx("rect",{x:"25",y:"40",width:"370",height:"180",rx:"6",fill:"#0c4a6e",stroke:"#38bdf8"}),e.jsx("text",{x:"35",y:"65",fill:"#e0f2fe",fontSize:"12",fontWeight:"bold",children:"unittest.mock.Mock"}),e.jsx("rect",{x:"35",y:"75",width:"350",height:"30",rx:"4",fill:"#0369a1"}),e.jsx("text",{x:"45",y:"95",fill:"#ffffff",fontSize:"9",fontFamily:"monospace",children:"mock.fn() ➔ Returns Child Mock"}),e.jsx("rect",{x:"35",y:"110",width:"350",height:"30",rx:"4",fill:"#0369a1"}),e.jsx("text",{x:"45",y:"130",fill:"#ffffff",fontSize:"9",fontFamily:"monospace",children:"mock.return_value / mock.side_effect"}),e.jsx("rect",{x:"35",y:"145",width:"350",height:"60",rx:"4",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"45",y:"165",fill:"#fca5a5",fontSize:"9",children:"❌ Lacks magic dunders: len(mock), with mock:,"}),e.jsx("text",{x:"45",y:"180",fill:"#fca5a5",fontSize:"9",children:"   mock[0], and [x for x in mock] raise TypeError!"}),e.jsx("rect",{x:"425",y:"40",width:"370",height:"180",rx:"6",fill:"#042f2e",stroke:"#14b8a6"}),e.jsx("text",{x:"435",y:"65",fill:"#5eead4",fontSize:"12",fontWeight:"bold",children:"unittest.mock.MagicMock (Default)"}),e.jsx("rect",{x:"435",y:"75",width:"350",height:"30",rx:"4",fill:"#064e3b"}),e.jsx("text",{x:"445",y:"95",fill:"#a7f3d0",fontSize:"9",fontFamily:"monospace",children:"All Mock capabilities PLUS Magic Dunders!"}),e.jsx("rect",{x:"435",y:"110",width:"350",height:"30",rx:"4",fill:"#064e3b"}),e.jsx("text",{x:"445",y:"130",fill:"#a7f3d0",fontSize:"9",fontFamily:"monospace",children:"__enter__ / __exit__ (Context Managers)"}),e.jsx("rect",{x:"435",y:"145",width:"350",height:"60",rx:"4",fill:"#134e4a",stroke:"#10b981"}),e.jsx("text",{x:"445",y:"165",fill:"#ccfbf1",fontSize:"9",children:"✅ Supports: len(), iterators, indexing,"}),e.jsx("text",{x:"445",y:"180",fill:"#ccfbf1",fontSize:"9",children:"   contextlib with blocks, and arithmetic operators!"})]})]}):r==="whereToPatch"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"THE GOLDEN RULE OF PATCHING: WHERE AN OBJECT IS USED VS DEFINED"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#082f49",stroke:"#0ea5e9"}),e.jsx("rect",{x:"25",y:"40",width:"230",height:"180",rx:"6",fill:"#0f172a",stroke:"#475569"}),e.jsx("text",{x:"35",y:"65",fill:"#94a3b8",fontSize:"11",fontWeight:"bold",children:"📁 external_bank.py"}),e.jsx("text",{x:"35",y:"85",fill:"#64748b",fontSize:"9",children:"Where function is DEFINED:"}),e.jsx("rect",{x:"35",y:"100",width:"210",height:"50",rx:"4",fill:"#1e293b"}),e.jsx("text",{x:"45",y:"120",fill:"#94a3b8",fontSize:"9",fontFamily:"monospace",children:"def transfer():"}),e.jsx("text",{x:"55",y:"135",fill:"#94a3b8",fontSize:"9",fontFamily:"monospace",children:'  return "LIVE_HTTP"'}),e.jsx("text",{x:"35",y:"185",fill:"#f43f5e",fontSize:"9",fontWeight:"bold",children:"❌ DO NOT PATCH HERE!"}),e.jsx("text",{x:"35",y:"200",fill:"#fda4af",fontSize:"8",children:'@patch("external_bank.transfer") FAILS!'}),e.jsx("path",{d:"M 260 130 L 290 130",stroke:"#38bdf8",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"295",y:"40",width:"240",height:"180",rx:"6",fill:"#042f2e",stroke:"#2dd4bf"}),e.jsx("text",{x:"305",y:"65",fill:"#5eead4",fontSize:"11",fontWeight:"bold",children:"📁 admission_service.py"}),e.jsx("text",{x:"305",y:"85",fill:"#a7f3d0",fontSize:"9",children:"Module Under Test (Where USED):"}),e.jsx("rect",{x:"305",y:"100",width:"220",height:"50",rx:"4",fill:"#022c22",stroke:"#0d9488"}),e.jsx("text",{x:"315",y:"120",fill:"#5eead4",fontSize:"9",fontFamily:"monospace",children:"from external_bank import transfer"}),e.jsx("text",{x:"315",y:"135",fill:"#5eead4",fontSize:"9",fontFamily:"monospace",children:"def pay(): transfer()"}),e.jsx("text",{x:"305",y:"185",fill:"#2dd4bf",fontSize:"9",fontWeight:"bold",children:"✅ PATCH TARGET LOCATION!"}),e.jsx("text",{x:"305",y:"200",fill:"#ccfbf1",fontSize:"8",children:'@patch("admission_service.transfer")'}),e.jsx("path",{d:"M 540 130 L 570 130",stroke:"#38bdf8",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"575",y:"40",width:"220",height:"180",rx:"6",fill:"#1e1b4b",stroke:"#818cf8"}),e.jsx("text",{x:"585",y:"65",fill:"#e0e7ff",fontSize:"11",fontWeight:"bold",children:"📁 test_admission.py"}),e.jsx("rect",{x:"585",y:"80",width:"200",height:"125",rx:"4",fill:"#0f172a",stroke:"#818cf8"}),e.jsx("text",{x:"595",y:"100",fill:"#c7d2fe",fontSize:"9",fontFamily:"monospace",children:'@patch("admission_service.transfer")'}),e.jsx("text",{x:"595",y:"115",fill:"#c7d2fe",fontSize:"9",fontFamily:"monospace",children:"def test_pay(mock_t):"}),e.jsx("text",{x:"605",y:"135",fill:"#86efac",fontSize:"9",fontFamily:"monospace",children:'mock_t.return_value = "OK"'}),e.jsx("text",{x:"605",y:"150",fill:"#86efac",fontSize:"9",fontFamily:"monospace",children:"pay()"}),e.jsx("text",{x:"605",y:"175",fill:"#facc15",fontSize:"9",fontWeight:"bold",children:"🎯 Perfect Isolation"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"MULTI-SERVICE BANKING & AUDIT LOGGING MOCK PIPELINE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#1e1b4b",stroke:"#a855f7"}),e.jsx("rect",{x:"25",y:"45",width:"220",height:"140",rx:"6",fill:"#3b0764",stroke:"#c084fc"}),e.jsx("text",{x:"35",y:"70",fill:"#f3e8ff",fontSize:"11",fontWeight:"bold",children:"TuitionProcessor"}),e.jsx("text",{x:"35",y:"90",fill:"#d8b4fe",fontSize:"9",children:"Real Domain Logic"}),e.jsx("text",{x:"35",y:"110",fill:"#e9d5ff",fontSize:"8",fontFamily:"monospace",children:'pay_fee("STU_1", 15000)'}),e.jsx("text",{x:"35",y:"145",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"Tested in Total Isolation"}),e.jsx("path",{d:"M 245 85 L 295 85",stroke:"#a855f7",strokeWidth:"2"}),e.jsx("rect",{x:"300",y:"35",width:"240",height:"90",rx:"6",fill:"#042f2e",stroke:"#2dd4bf"}),e.jsx("text",{x:"310",y:"55",fill:"#5eead4",fontSize:"10",fontWeight:"bold",children:"Mock 1: PaymentGatewayClient"}),e.jsx("text",{x:"310",y:"72",fill:"#ccfbf1",fontSize:"8",fontFamily:"monospace",children:'mock_gw.charge.return_value = {"status": "SUCCESS"}'}),e.jsx("text",{x:"310",y:"95",fill:"#86efac",fontSize:"8",children:'✅ assert_called_once_with("STU_1", 15000)'}),e.jsx("path",{d:"M 245 145 L 295 145",stroke:"#a855f7",strokeWidth:"2"}),e.jsx("rect",{x:"300",y:"135",width:"240",height:"90",rx:"6",fill:"#0c4a6e",stroke:"#38bdf8"}),e.jsx("text",{x:"310",y:"155",fill:"#e0f2fe",fontSize:"10",fontWeight:"bold",children:"Mock 2: AuditLogService"}),e.jsx("text",{x:"310",y:"172",fill:"#bae6fd",fontSize:"8",fontFamily:"monospace",children:"mock_audit.log.return_value = True"}),e.jsx("text",{x:"310",y:"195",fill:"#86efac",fontSize:"8",children:'✅ assert_called_once_with("STU_1", "SETTLED")'}),e.jsx("rect",{x:"560",y:"45",width:"235",height:"180",rx:"6",fill:"#0f172a",stroke:"#818cf8"}),e.jsx("text",{x:"575",y:"70",fill:"#e0e7ff",fontSize:"11",fontWeight:"bold",children:"Test Outcomes Verified:"}),e.jsx("text",{x:"575",y:"95",fill:"#86efac",fontSize:"9",children:"1. Zero live bank HTTP calls made"}),e.jsx("text",{x:"575",y:"115",fill:"#86efac",fontSize:"9",children:"2. Exact payment payload verified"}),e.jsx("text",{x:"575",y:"135",fill:"#86efac",fontSize:"9",children:"3. Audit ledger entry confirmed"}),e.jsx("text",{x:"575",y:"155",fill:"#86efac",fontSize:"9",children:"4. Runtime: 0.001s in CI pipeline"}),e.jsx("text",{x:"575",y:"190",fill:"#facc15",fontSize:"9",fontWeight:"bold",children:"⚡ High-Velocity Determinism"})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧪"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Mock Configuration & Invocation Simulator"})]}),e.jsxs("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:["Configure mock execution behaviors (",e.jsx("code",{className:"text-teal-300 font-mono",children:"return_value"}),", ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"side_effect"})," exception, or iterable sequence) and toggle ",e.jsx("code",{className:"text-purple-300 font-mono",children:"autospec=True"})," to inspect live test code:"]}),e.jsxs("div",{className:"bg-slate-950 p-5 sm:p-6 rounded-xl border border-slate-800/90 space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3",children:"Select Mock Behavior:"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[{id:"RETURN_VALUE",label:"return_value",icon:"📦",tag:"Static JSON Payload"},{id:"SIDE_EFFECT_ERROR",label:"side_effect (Error)",icon:"💥",tag:"Network Timeout Exception"},{id:"ITERABLE_SEQUENCE",label:"side_effect (Iterable)",icon:"🔄",tag:"Successive Retry Sequence"}].map(t=>e.jsxs("button",{onClick:()=>p(t.id),className:i("p-3 rounded-xl border text-left transition-all",s===t.id?"bg-teal-950/60 border-teal-500 shadow-md shadow-teal-950/50":"bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400"),children:[e.jsxs("div",{className:"text-base mb-1",children:[t.icon," ",e.jsx("strong",{className:"text-slate-200 text-xs sm:text-sm",children:t.label})]}),e.jsx("div",{className:"text-[11px] text-teal-400 font-mono",children:t.tag})]},t.id))})]}),e.jsxs("div",{className:"flex items-center justify-between p-3 bg-slate-900/80 rounded-xl border border-slate-800",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-bold text-white",children:"Enable autospec=True (Signature Drift Guard)"}),e.jsx("div",{className:"text-[11px] text-slate-400",children:"Strictly enforces real class/function signatures, rejecting invalid method calls and typos"})]}),e.jsx("button",{onClick:()=>f(!a),className:i("px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all",a?"bg-emerald-950 border border-emerald-500 text-emerald-300":"bg-slate-800 border border-slate-700 text-slate-400"),children:a?"AUTOSPEC: ACTIVE":"UNCONSTRAINED MOCK"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2",children:[e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-teal-900/50",children:[e.jsx("div",{className:"text-xs text-teal-400 font-medium mb-1",children:"Simulation Behavior"}),e.jsx("div",{className:"text-xs font-bold font-mono text-teal-300 mt-1 leading-snug",children:c})]}),e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-cyan-900/50",children:[e.jsx("div",{className:"text-xs text-cyan-400 font-medium mb-1",children:"Contract Assertion"}),e.jsx("div",{className:"text-xs font-bold font-mono text-cyan-300 mt-1 leading-snug",children:l})]}),e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-purple-900/50",children:[e.jsx("div",{className:"text-xs text-purple-400 font-medium mb-1",children:"Production Scenario"}),e.jsx("div",{className:"text-xs font-bold font-mono text-purple-300 mt-1 leading-snug",children:d})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2",children:"Generated unittest.mock Implementation:"}),e.jsx("pre",{className:"p-4 bg-slate-900/90 border border-slate-800 rounded-xl text-xs sm:text-sm font-mono text-teal-200 overflow-x-auto leading-relaxed",children:g})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Production Code Labs & Mock Suites"})]}),e.jsx("p",{className:"text-slate-300 mb-8 text-base leading-relaxed",children:"Inspect, run, and master all four production-grade mock suites covering basic mocks, patch decorators, network SMS dispatches, and the multi-campus institutional payment gateway:"}),e.jsxs("div",{className:"space-y-10",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-teal-300",children:"Lab 1: Mock vs MagicMock & Invocation Assertions"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Configuring ",e.jsx("code",{className:"text-teal-300 font-mono",children:"return_value"}),", ",e.jsx("code",{className:"text-teal-300 font-mono",children:"side_effect"}),", and asserting ",e.jsx("code",{className:"text-teal-300 font-mono",children:"assert_called_once_with()"})," on scholarship calculators."]})]}),e.jsx(x,{fileModule:y,title:"basic_mock_and_magicmock.py",highlightLines:[25,36,47,59]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-cyan-300",children:"Lab 2: @patch Decorators & with patch() Context Managers"}),e.jsx("p",{className:"text-sm text-slate-400",children:'Adhering to the "Where to Patch" rule and isolating external banking gateway transfer methods.'})]}),e.jsx(x,{fileModule:j,title:"patch_decorator_and_context_manager.py",highlightLines:[27,43]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-purple-300",children:"Lab 3: Mocking Network Calls & Webhook SMS Dispatches"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Mocking HTTP notification clients for candidate onboarding across Barrackpore and Kolkata without sending real SMS alerts."})]}),e.jsx(x,{fileModule:v,title:"mocking_network_and_database_calls.py",highlightLines:[32,45,52]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-amber-300",children:"Lab 4: Institutional Payment Gateway & Audit Mock Suite Case Study"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Production-grade suite coordinating payment gateway doubles and audit logging mocks for Mamata and Mahima across Barrackpore and Kolkata."})]}),e.jsx(x,{fileModule:N,title:"institutional_payment_gateway_mock_suite.py",highlightLines:[42,58,69]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Mocking Pitfalls & Anti-Patterns"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"1. Patching Where Defined, Not Where Used"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Patching ",e.jsx("code",{className:"text-rose-400 font-mono",children:"requests.get"})," instead of ",e.jsx("code",{className:"text-teal-300 font-mono",children:"my_module.requests.get"})," has no effect if the module used ",e.jsx("code",{className:"text-rose-400 font-mono",children:"from requests import get"}),"."]}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:['# BUG: @patch("requests.get")',`
`,'# FIX: @patch("my_app.services.admission.requests.get")']})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"2. Silent Typos on Un-Specced Mocks"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Writing ",e.jsx("code",{className:"text-rose-400 font-mono",children:"mock.asert_called()"})," (typo in assert) dynamically creates a new Mock attribute rather than raising an error! Use ",e.jsx("code",{className:"text-teal-300 font-mono",children:"autospec=True"}),"."]}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# BUG: mock.asert_called_once() # Silently passes!",`
`,"# FIX: Use autospec=True to catch typos"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"3. Over-Mocking Internal Private Logic"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:"Mocking internal private helper functions ties tests to implementation details, causing tests to break during harmless internal refactorings."}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# ANTI-PATTERN: Mocking internal _compute_tax() helper",`
`,"# BEST PRACTICE: Mock only external APIs, DBs, and I/O"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"4. Reversed Parameter Order in Stacked @patch"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Stacked patch decorators pass mock arguments to test functions in ",e.jsx("strong",{children:"bottom-to-top"})," (reverse) order!"]}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:['# @patch("module.email") # 2nd argument',`
`,'# @patch("module.db")    # 1st argument',`
`,"# def test_fn(mock_db, mock_email): ..."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"✅"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Professional Mocking Checklist"})]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm sm:text-base",children:[e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Mock Only at Architectural Boundaries:"})," Mock network HTTP calls, SMS dispatchers, databases, and clocks; test business logic directly."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Adhere to Where-to-Patch:"})," Patch objects in the namespace where they are imported and used by the module under test."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Use autospec=True:"})," Prevent mock drift and catch renamed or deleted methods immediately."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Verify Invocation Contracts:"})," Always assert that mocks received the exact expected arguments via ",e.jsx("code",{className:"text-teal-300 font-mono",children:"assert_called_once_with()"}),"."]})]})]})]}),e.jsx("section",{ref:n,className:"section-hidden",children:e.jsx(b,{title:"Mocking External Dependencies FAQs",questions:S})}),e.jsx("section",{ref:n,className:"section-hidden",children:e.jsx(k,{content:T,title:"Topic 6: Mocking External Dependencies Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic6_note.txt"})}),e.jsx("section",{ref:n,className:"section-hidden",children:e.jsx(w,{note:"Mocking is the bridge that enables professional test suites to run hundreds of tests per second without spending real money on SMS credits or hitting live banking APIs. In our institutional software across Barrackpore, Kolkata, Ichapur, and Jadavpur, testing student tuition payments for Mamata and Mahima requires isolating payment gateway webhooks and audit loggers. Master the where-to-patch golden rule and autospec=True, and your tests will remain resilient, fast, and completely deterministic."})})]})]})}export{R as default};
